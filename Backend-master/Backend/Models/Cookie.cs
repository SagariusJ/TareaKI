using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Cookie
    {
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Description { get; set; }
        [Required]
        public Boolean Required { get; set; }
        public Boolean Accepted { get; set; }
    }
}
