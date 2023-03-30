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
            Evento[] eventos = { new Evento() { Tema = "Angular", Local = "Uberlândia" } };
            return eventos;
        }

    }
}