using ProEventos_Application.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProEventos_Application.Contracts
{
    public interface IEventoService
    {
        Task<EventoDTO> AddEventos(EventoDTO model);
        Task<EventoDTO> UpdateEvento(int eventoId, EventoDTO model);
        Task<bool> DeleteEvento(int eventoId);

        Task<EventoDTO[]> GetAllEventosAsync(bool includePalestrantes = false);
        Task<EventoDTO[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false);
        Task<EventoDTO> GetEventoByIdAsync(int eventoId, bool includePalestrantes = false);
    }
}
