using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProEventos_Application.Contracts;
using ProEventos_Application.Services;
using ProEventos_Persistence;
using ProEventos_Persistence.Context;
using ProEventos_Persistence.Contracts;

var builder = WebApplication.CreateBuilder(args);



// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(); //CORS
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ProEventosContext>();

builder.Services.AddScoped<IEventoService, EventoService>();
builder.Services.AddScoped<IGeralPersist, GeralPersist>();
builder.Services.AddScoped<IEventoPersist, EventoPersist>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors( x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin() );

app.MapControllers();

app.Run();
