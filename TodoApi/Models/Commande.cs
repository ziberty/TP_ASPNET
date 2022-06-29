namespace TodoApi.Models;

public class Commande
{
    public long Id { get; set; }
    public string? Entree{ get; set; }
    public string? Plat{ get; set; }
    public string? Dessert{ get; set; }
    public bool Boisson { get; set; }
    public string? EtatCommande { get; set; }
}