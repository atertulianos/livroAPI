using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Models;
namespace WebApi.Data
{
    //Cria um repositório Genérico com os métodos que executam as funções básicas CRUD.
    public interface IRepositorio
    {   
       
       /* Métodos que executam as funções CRUD básica:  
       Find - Lista todos os Livros da tabela Livro;
       FindById - Lista o livro com base no Id informado; e Delete 
       Create - Cria um usuário novo;
       Update - Altera/Atualiza as informações do Livro com base no Id informado;
       delegate - Deleta um livro com base no Id informado. */

        Task<List<Livro>> FindAll<Livro>() where Livro : class;
        Task<Livro> FindById<Livro>(int id) where Livro : class;
        Task CreateAsync<Livro>(Livro entity) where Livro : class;
        Task UpdateAsync<Livro>(Livro entity) where Livro : class;
        Task DeleteAsync<Livro>(Livro entity) where Livro : class;
        
    }
}