using Microsoft.AspNetCore.Mvc;
using ProEventos.Model;
using ProEventos_API.Model;

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
        new Evento() { ImagemURL = "foto.png", Tema = "Conferência de Tecnologia", Local = "Centro de Convenções de Uberlândia", DataEvento = new DateTime(2023, 12, 31, 8, 0, 0), QtdPessoas = 1000, Lotes = new List<Lote> { new Lote { Nome = "Lote 1", Preco = 100, DataInicio = new DateTime(2023, 10, 1, 0, 0, 0), DataFim = new DateTime(2023, 12, 1, 0, 0, 0) } }, RedesSociais = new List<RedeSocial> { new RedeSocial { Nome = "Facebook", URL = "https://www.facebook.com/conferenciadetecnologia" }, new RedeSocial { Nome = "Twitter", URL = "https://twitter.com/conferenciadetecnologia" } } },
        new Evento() { ImagemURL = "foto2.png", Tema = "Seminário de Marketing Digital", Local = "Hotel Mercure Uberlândia", DataEvento = new DateTime(2024, 3, 15, 9, 0, 0), QtdPessoas = 200, Lotes = new List<Lote> { new Lote { Nome = "Lote 1", Preco = 50, DataInicio = new DateTime(2024, 1, 1, 0, 0, 0), DataFim = new DateTime(2024, 3, 1, 0, 0, 0) } }, RedesSociais = new List<RedeSocial> { new RedeSocial { Nome = "Facebook", URL = "https://www.facebook.com/seminariomarketingdigital" }, new RedeSocial { Nome = "Instagram", URL = "https://www.instagram.com/seminariomarketingdigital" } } },
        new Evento() { ImagemURL = "foto3.jpg", Tema = "Workshop de Design Thinking", Local = "Universidade Federal de Uberlândia", DataEvento = new DateTime(2024, 6, 30, 14, 0, 0), QtdPessoas = 50, Lotes = new List<Lote> { new Lote { Nome = "Lote 1", Preco = 20, DataInicio = new DateTime(2024, 4, 1, 0, 0, 0), DataFim = new DateTime(2024, 6, 1, 0, 0, 0) } }, RedesSociais = new List<RedeSocial> { new RedeSocial { Nome = "Facebook", URL = "https://www.facebook.com/workshopdesigthinking" }, new RedeSocial { Nome = "LinkedIn", URL = "https://www.linkedin.com/company/workshopdesigthinking" } } }
    };
            return eventos;
        }

    }
}