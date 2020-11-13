using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Data
{
    // Classe que implementa métido de conexão ao banco de dados. 
    // Cria o banco de dados atrás das informações contida na classe Livro.
    // Gera inserção dos dados no banco de dados atraves do método OnModelCreating
    public class DataContext : DbContext 
    {
        
        public DataContext(DbContextOptions<DataContext> options) : base (options) { }        
        public DbSet<Livro> Livros { get; set; }
        
        /* Seed onde vai inserir os registros abaixo no banco de dados previamente ao rodar o comando
        dotnet ef migrations add initial caso a pasta migrations não esteja no projeto.
        dotnet database update para atualizar o banco de dados caso tenha realizado alguma alteração no
        seed abaixo.
        */
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Livro>()
                .HasData(new List<Livro>(){
                    new Livro(1, "O Pequeno Principe", "Antoine de Saint-Exupéry", "O Pequeno Principe"),
                    new Livro(2, "Dom Quixote", "Miguel de Cervantes", "Dom Quixote"),
                    new Livro(3, "Inocencia", "Alfredo d'Escragnolle Taunay", "Inocencia"),
                    new Livro(4, "A Arte da Guerra", "Sun Tzu", "é um tratado militar escrito durante o século IV a.C"),
                });
        }
        
    }
}