import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro';
import { ToastrService } from 'ngx-toastr';
import { LivroService } from '../service/livro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-livros',
  templateUrl: './delete-livros.component.html',
  styleUrls: ['./delete-livros.component.scss']
})
export class DeleteLivrosComponent implements OnInit {

  public titulo = 'Listando Livro para ser Excluido';
  public livroSelecionado: Livro;
  public textoSimples: string;


  public livros: Livro[];
  public livro: Livro;
  constructor(private livroService: LivroService,
    private router: Router,
    private toastr: ToastrService,

    ) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(){
    this.livroService.getAll().subscribe(
      (livros: Livro[])  =>  {
        if(this.livro == null){

        }
        this.livros = livros;
      },
      (erro: any)  =>  {
        console.error(erro);
      }
    )


  }

  deletarLivro(id: number){
    this.livroService.delete(id).subscribe(
      (livro: any)  =>  {
        this.toastr.success('Livro EXCLUIDO com sucesso!');
        this.carregarLivros();
        this.voltar();
      },
      (erro: any)  =>  {
        this.toastr.error(`Erro: Não foi possível excluir este livro !`);
        console.error(erro);
      }
    );
  }
  voltar(){
    this.livroSelecionado = null;
  }
  livroSelect(livros: Livro){
    this.livroSelecionado = livros;


  }




}
