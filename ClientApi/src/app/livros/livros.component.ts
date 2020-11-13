import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro';
import { LivroService } from '../service/livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {


  public titulo = 'Listando Livros';
  public livroSelecionado: Livro;
  public textoSimples: string;


  public livros: Livro[];
  public livro: Livro;
  constructor(private livroService: LivroService) {

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


  voltar(){
    this.livroSelecionado = null;
  }
  livroSelect(livros: Livro){
    this.livroSelecionado = livros;

  }




}
