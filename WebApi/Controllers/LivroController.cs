using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Controllers
{

    [ApiController]
    [Route("api/livros")]

    // Classe controlador que
      public class LivroController : ControllerBase
    {
        
        
        private readonly IRepositorio _repositorio;
        
        // Solicita dependencia da inteface IRepositorio e da conexão com banco de dados
        public LivroController(DataContext context, IRepositorio repositorio)
        {
            _repositorio = repositorio;
        }

        // GET: api/Livros
        [HttpGet]
        // Método para listar todas informações contida na tabela
        public async Task<ActionResult<List<Livro>>> GetLivro([FromServices] DataContext context)
        {
            
            var livros =  await _repositorio.FindAll<Livro>();
            //var livros = await _repositorio.Livro.Skip(page * pageSize).Take(pageSize).ToListAsync();
            return  livros;
        }

        // GET: api/livros/5
        [HttpGet("{id:int}")]

        // Método que busca uma informação no banco atrás do parâmetro id
        public async Task<ActionResult<Livro>> GetLivro([FromServices] DataContext context, int id)
        {
            try
            {                  
                var livro = await _repositorio.FindById<Livro>(id);
                
                if (livro != null){
                    return livro;
                }

                return NotFound(new { message = "Livro não encontrado! " });
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest(new { message = "Não foi possível Encontrar este Livro!" });
            }

           
        }

        // PUT: api/livros/5
        [HttpPut("{id:int}")]
        
        //Método para atualizar uma ou mais informações da tabela com base no parâmetro "Id" informado
        public async Task<IActionResult> PutLivro([FromServices] DataContext context, int id, Livro livro)
        {
            // verifica se o id de entrada é diferente do id armazenado no banco    
            if (id != livro.Id)
                    return NotFound(new { message = "Livro não encontrado! " });

            // Verifica se os dados são válidos
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {  
                await _repositorio.UpdateAsync<Livro>(livro);
                return Ok();
            
            }
            catch (DbUpdateConcurrencyException)
            {
              return BadRequest(new { message = "Não foi possível atualizar o Livro!" });
            }
            
        }

        // POST: api/livros
        [HttpPost]

        //Método que adiciona uma informação nova na tabela Livro
        public async Task<ActionResult<Livro>> PostLivro([FromServices] DataContext context,
            [FromBody] Livro livro)
        {
            // Verifica se os dados são válidos
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                await _repositorio.CreateAsync<Livro>(livro);
                return CreatedAtAction("GetLivro", new { id = livro.Id }, livro);
                
            }
            catch (DbUpdateConcurrencyException)
            {
                return Ok(new { message = "Não foi possível Cadastrar o Livro! " });
            }
            
        }

        // DELETE: api/livros/5
        [HttpDelete("{id:int}")]

        // Método que verifica se a informação existe, caso exista, irá deletar a informação do banco de dados
        // A informação será deleta com base no parâmetro do tipo inteiro: "Id" 
        public async Task<ActionResult<Livro>> DeleteLivro([FromServices] DataContext context, int id)
        {
            var livro = await _repositorio.FindById<Livro>(id);

            if (livro == null)
            {
                return NotFound(new { message = "Livro não encontrado! " });
            }
            try
            {     
                await _repositorio.DeleteAsync<Livro>(livro);
                return livro;
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest(new { message = "Não foi possível Deletar este Livro! " });
            }

        }

    }
}