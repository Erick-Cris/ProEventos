using Microsoft.AspNetCore.Mvc;
using ProEventos.Model;

namespace ProEventos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventosController : ControllerBase
    {
        [HttpGet(Name = "Get")]
        public Evento[] Get()
        {
            Evento[] eventos = { 
            new Evento() { Imagem = "foto.png", Tema = "Angular1", Local = "Uberlândia", Data= DateTime.Now, Quantidade = 1, Lote = "1s", Opcoes = "" },
            new Evento() { Imagem = "foto2.png", Tema = "Angular2", Local = "Uberlândia", Data= DateTime.Now, Quantidade = 1, Lote = "1s", Opcoes = "" },
            new Evento() { Imagem = "foto3.jpg", Tema = "Angular3", Local = "Uberlândia", Data= DateTime.Now, Quantidade = 1, Lote = "1s", Opcoes = "" }
            };
            return eventos;
        }
    }
}