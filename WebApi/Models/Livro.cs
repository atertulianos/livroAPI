

using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    
     //Define as propriedades dos dados que serão armazenados no banco de dados.

    public class Livro
    {
        public Livro(){ } 
        public Livro(int id, string titulo, string autor, string descricao)
        {
            this.Id = id;
            this.Titulo = titulo;
            this.Autor  = autor;
            this.Descricao  = descricao;
        }

        
        
        [Key]
        public int  Id { get; set; }

        
        [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        [MinLength(1, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        public string  Titulo { get; set; }

        
        [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        [MinLength(1, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        public string  Autor  { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [MaxLength(1024, ErrorMessage = "Este campo deve conter no máximo 1024 caracteres")]
        public string  Descricao { get; set; }
    }
}
