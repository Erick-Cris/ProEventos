namespace ProEventos.Model
{
    public class Evento
    {
        public string Imagem { get; set; }
        public string Tema { get; set; }
        public string Local { get; set; }
        public DateTime Data { get; set; }
        public int Quantidade { get; set; }
        public string Lote { get; set; }
        public string Opcoes { get; set; }
    }
}
