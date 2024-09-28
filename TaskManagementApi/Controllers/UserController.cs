using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using TaskManagementApi.Models;

namespace Incipientus_TM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IConfiguration _configuration;
        private string _filePath = "";
        public UserController(IConfiguration configuration)
        {
            _configuration = configuration.GetSection("AppConfiguration");
            _filePath = _configuration.GetSection("dbPath").Value;
        }

        [HttpGet]
        public List<User> GetUsers()
        {
            Console.WriteLine(_filePath);
            List<User> users = new List<User>();
            using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
            {
                conn.Open();
                SqliteCommand selectCommand = new SqliteCommand("SELECT * FROM Users", conn);
                SqliteDataReader reader = selectCommand.ExecuteReader();
                while (reader.Read())
                {
                    User user = new User();
                    user.Id = reader.GetInt32(0);
                    user.Username = reader.GetString(1);
                    user.Password = reader.GetString(2);
                    user.Email = reader.GetString(3);
                    users.Add(user);
                }
            }
            return users;
        }

        [HttpGet("{id}")]
        public User GetUserById([FromRoute] int id)
        {
            User user = new User();
            user.Id = id;
            try
            {
                using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
                {
                    conn.Open();
                    SqliteCommand selectCommand = new SqliteCommand("SELECT * FROM Users WHERE Id=" + id, conn);
                    SqliteDataReader reader = selectCommand.ExecuteReader();
                    while (reader.Read())
                    {
                        user.Username = reader.GetString(1);
                        user.Password = reader.GetString(2);
                        user.Email = reader.GetString(3);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return user;
        }

        [HttpGet("username/{username}")]
        public User GetUserByName([FromRoute] string username)
        {
            User user = new User();
            user.Username = username;
            try
            {
                using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
                {
                    conn.Open();
                    SqliteCommand selectCommand = new SqliteCommand("SELECT * FROM Users WHERE Username=" + username, conn);
                    SqliteDataReader reader = selectCommand.ExecuteReader();
                    while (reader.Read())
                    {
                        user.Id = reader.GetInt32(0);
                        user.Password = reader.GetString(2);
                        user.Email = reader.GetString(3);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return user;
        }

        [HttpPost]
        public User CreateUser([FromBody] User user)
        {
            try
            {
                using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
                {
                    conn.Open();
                    SqliteCommand insertCommand = new SqliteCommand(@"INSERT INTO Users (Username, Password, Email) VALUES ($Username, $Password, $Email);", conn);
                    insertCommand.Parameters.AddWithValue("$Username", user.Username);
                    insertCommand.Parameters.AddWithValue("$Password", user.Password);
                    insertCommand.Parameters.AddWithValue("$Email", user.Email);
                    insertCommand.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return user;
            }

            return GetUserByName(user.Username);
        }

        [HttpPut("{id}")]
        public bool UpdateUser([FromRoute] int id, [FromBody] User user)
        {
            try
            {
                using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
                {
                    conn.Open();
                    SqliteCommand updateCommand = new SqliteCommand(@"UPDATE Users SET Username=$Username, Password=$Password, Email=$Email WHERE Id=" + id, conn);
                    updateCommand.Parameters.AddWithValue("$Username", user.Username);
                    updateCommand.Parameters.AddWithValue("$Password", user.Password);
                    updateCommand.Parameters.AddWithValue("$Email", user.Email);
                    updateCommand.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
            return true;
        }

        [HttpDelete("{id}")]
        public bool DeleteUser([FromRoute] int id)
        {
            using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
            {
                conn.Open();
                SqliteCommand deleteCommand = new SqliteCommand("DELETE FROM Users WHERE Id=" + id, conn);
                deleteCommand.ExecuteNonQuery();
            }
            return true;
        }
    }
}
