using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Livros",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    titulo = table.Column<string>(type: "TEXT", nullable: true),
                    autor = table.Column<string>(type: "TEXT", nullable: true),
                    descricao = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Livros", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "Livros",
                columns: new[] { "id", "autor", "descricao", "titulo" },
                values: new object[] { 1, "Antoine de Saint-Exupéry", "O Pequeno Principe", "O Pequeno Principe" });

            migrationBuilder.InsertData(
                table: "Livros",
                columns: new[] { "id", "autor", "descricao", "titulo" },
                values: new object[] { 2, "Miguel de Cervantes", "Dom Quixote", "Dom Quixote" });

            migrationBuilder.InsertData(
                table: "Livros",
                columns: new[] { "id", "autor", "descricao", "titulo" },
                values: new object[] { 3, "Alfredo d'Escragnolle Taunay", "Inocencia", "Inocencia" });

            migrationBuilder.InsertData(
                table: "Livros",
                columns: new[] { "id", "autor", "descricao", "titulo" },
                values: new object[] { 4, "Sun Tzu", "é um tratado militar escrito durante o século IV a.C", "A Arte da Guerra" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Livros");
        }
    }
}
