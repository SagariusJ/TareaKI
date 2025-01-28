using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Politic
    {
        public int Id { get; set; }
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? Description { get; set; }
    }
}
