using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using WebApi.Data;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            /*
            Foi criado o serviço adicionando a classe DataContext que está localizado na pasta Data/DataContext.cs
            para configurar o acesso do banco de dados do Sqlite. A variável "DefaltConn" deve ser configurada no
            "appsettings.json e appsettings.Development.json" com as informações da conexão com banco.
            */

            services.AddDbContext<DataContext>(
                x   =>  x.UseSqlite(Configuration.GetConnectionString("DefaltConm"))
            );
            services.AddControllers();
            
            /*
            Para conseguir utilizar a interface IRepositorio, deverá configurar a injeção de dependência conforme abaixo.
            Foi adicionado um serviço com escopo que leva nossa interface 
            e nossa implementação com um DbContext.
            */
            services.AddScoped<IRepositorio, Repositorio<DataContext>>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
