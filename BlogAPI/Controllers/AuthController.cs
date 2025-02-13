namespace BlogAPI.Controllers
{
    using BlogAPI.Models;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.IdentityModel.Tokens;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;

    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("login")]
        public ActionResult<string> Login(AdminLogin request)
        {
            if (request.Username != _configuration["AdminCredentials:Username"] ||
                request.Password != _configuration["AdminCredentials:Password"])
            {
                return Unauthorized();
            }

            string token = CreateToken();
            return Ok(token);
        }

        private string CreateToken()
        {
            List<Claim> claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, "Admin")
        };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration["JWT:Key"]));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}
