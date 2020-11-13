import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Livro } from '../models/livro';
import { LivroService } from '../service/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-livros',
  templateUrl: './add-livros.component.html',
  styleUrls: ['./add-livros.component.scss']
})
export class AddLivrosComponent implements OnInit {

  public titulo = 'Cadastrando Livros';

  public livrosForm: FormGroup;
  public livroSelecionado: Livro;
  public textoSimples: string;

  public livros: Livro[];
  public livro: Livro;
  public modeSave = 'post';

  constructor(private fb: FormBuilder,
    private livroService: LivroService,
    private router: Router,
    private toastr: ToastrService,


    ) {
    this.criarForm();
  }


  ngOnInit(): void {

    this.carregarLivros();
  }

  carregarLivros(){
    this.livroService.getAll().subscribe(
      (livros: Livro[])  =>  {
        this.livros = livros;
      },
      (erro: any)  =>  {
        console.error(erro);
      }
    )

  }

  criarForm(){
    this.livrosForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      descricao: ['',  Validators.required]
    });
  }

  salvarLivro(livro: Livro){
    this.livroService.post(livro).subscribe(
      (retorno: Livro)  =>  {
        this.toastr.success('Título: '+livro.titulo+' \n cadastrado com sucesso!', 'Código: '+livro.id );
        this.ngOnInit();
      },
      (erro: any)  =>  {
        this.toastr.error(`Erro: Cadastro não realizado !`);
        console.log(erro);
      }
    );
  }
  livroSubmit(){
    this.salvarLivro(this.livrosForm.value);
    this.router.navigate(['livros']);

  }

}
