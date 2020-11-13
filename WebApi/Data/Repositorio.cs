using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Data
{

    /*  - Implementa a interface IRepositorio onde temos os métodos genéricos do CRUD.
    
        - Temos também um DBContext genérico como parâmetro, permitindo substituir facilmente
        o tipo de DBContext que usaremos se nosso banco de dados for alterado.

        - Cada método terá uma classe genérica que será modelo de entidade onde mapeia 
        para uma tabela no banco de dados.
    */
    public class Repositorio<DataContext> : IRepositorio where DataContext : DbContext
    {
        protected DataContext dbContext;

        public Repositorio(DataContext context)
        {
            dbContext = context;
        }

        public async Task<List<Livro>> FindAll<Livro>() where Livro : class
        {
            return await this.dbContext.Set<Livro>().ToListAsync();
        }

        public async Task<Livro> FindById<Livro>(int id) where Livro : class
        { 
            return await this.dbContext.Set<Livro>().FindAsync(id);
        }

        public async Task UpdateAsync<Livro>(Livro entity) where Livro : class
        {
            this.dbContext.Set<Livro>().Update(entity);

            _ = await this.dbContext.SaveChangesAsync();
        }
        
        public async Task CreateAsync<Livro>(Livro entity) where Livro : class
        {
            this.dbContext.Set<Livro>().Add(entity);

            _ = await this.dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync<Livro>(Livro entity) where Livro : class
        {
            this.dbContext.Set<Livro>().Remove(entity);

            _ = await this.dbContext.SaveChangesAsync();
        }


    }
}
