import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Livro } from '../models/livro';
import { LivroService } from '../service/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-livros',
  templateUrl: './edit-livros.component.html',
  styleUrls: ['./edit-livros.component.scss']
})
export class EditLivrosComponent implements OnInit {

  public titulo = 'Editando Livro';
  public livrosForm: FormGroup;
  public textoSimples: string;
  public livroSelecionado: Livro;

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

  livroSelect(livro: Livro){
    this.livroSelecionado = livro;
    this.livrosForm.patchValue(livro);

  }

  criarForm(){
    this.livrosForm = this.fb.group({
      id:[''],
      titulo: ['',  Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(60)
      ])],
      autor: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(60)
      ])],
      descricao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(60)
      ])]
    });
  }

  salvarLivro(livro: Livro){
    this.livroService.put(livro.id, livro).subscribe(
      (retorno: Livro)  =>  {
        this.toastr.success('Livro atualizado com sucesso!');
        this.ngOnInit();
      },
      (erro: any)  =>  {
        this.toastr.error(`Erro: O livro não pode ser atualizado!`);
        console.error(erro);
      }
    );
  }
  livroSubmit(){
    this.salvarLivro(this.livrosForm.value);
    this.router.navigate(['edit-livros']);
    this.voltar();
  }

  voltar(){
    this.livroSelecionado = null;
  }







}
