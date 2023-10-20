using System.ComponentModel.DataAnnotations;

namespace Api.Dtos;

public class UserDto
{
    [Required]
    [StringLength(30, MinimumLength = 3, ErrorMessage = "Name must be at least 3")]
    public string Name { get; set; }
}
