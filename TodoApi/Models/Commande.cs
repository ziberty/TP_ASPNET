namespace TodoApi.Models;

public class Commande
{
    public long Id { get; set; }
    public Entree? Entree{ get; set; }
    public Plat Plat{ get; set; }
    public Dessert? Dessert{ get; set; }
    public bool Boisson { get; set; }
    public string EtatCommande { get; set; }
}