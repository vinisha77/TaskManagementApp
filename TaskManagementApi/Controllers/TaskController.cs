using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using TaskManagementApi.Models;

namespace Incipientus_TM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : Controller
    {
        private readonly IConfiguration _configuration;
        private string _filePath = "";
        public TaskController(IConfiguration configuration)
        {
            _configuration = configuration.GetSection("AppConfiguration");
            _filePath = _configuration.GetSection("dbPath").Value;
        }

        [HttpGet]
        public List<TaskManagementApi.Models.Task> GetTasks()
        {
            Console.WriteLine(_filePath);
            List<TaskManagementApi.Models.Task> tasks = new List<TaskManagementApi.Models.Task>();
            using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
            {
                conn.Open();
                SqliteCommand selectCommand = new SqliteCommand("SELECT * FROM Tasks", conn);
                SqliteDataReader reader = selectCommand.ExecuteReader();
                while (reader.Read())
                {
                    TaskManagementApi.Models.Task task = new TaskManagementApi.Models.Task();
                    task.Id = reader.GetInt32(0);
                    task.Title = reader.GetString(1);
                    task.Description = reader.GetString(2);
                    task.CreatedDate = reader.GetString(3);
                    task.DueDate = reader.GetString(4);
                    task.IsCompleted = reader.GetString(5) == "True";
                    task.User = reader.GetString(6);
                    tasks.Add(task);
                }
            }
            return tasks;
        }

        [HttpGet("{id}")]
        public TaskManagementApi.Models.Task GetTask([FromRoute] int id)
        {
            TaskManagementApi.Models.Task task = new TaskManagementApi.Models.Task();
            task.Id = id;
            try
            {
                using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
                {
                    conn.Open();
                    SqliteCommand selectCommand = new SqliteCommand("SELECT * FROM Tasks WHERE Id=" + id, conn);
                    SqliteDataReader reader = selectCommand.ExecuteReader();
                    while (reader.Read())
                    {
                        task.Title = reader.GetString(1);
                        task.Description = reader.GetString(2);
                        task.CreatedDate = reader.GetString(3);
                        task.DueDate = reader.GetString(4);
                        task.IsCompleted = reader.GetString(5) == "True";
                        task.User = reader.GetString(6);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return task;
        }

        [HttpPost]
        public bool CreateTask([FromBody] TaskManagementApi.Models.Task task)
        {
            try
            {
                using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
                {
                    conn.Open();
                    SqliteCommand insertCommand = new SqliteCommand(@"INSERT INTO Tasks (Title, Description, CreatedDate, DueDate, IsCompleted, User) VALUES ($Title, $Description, $CreatedDate, $DueDate, $IsCompleted, $User);", conn);
                    insertCommand.Parameters.AddWithValue("$Title", task.Title);
                    insertCommand.Parameters.AddWithValue("$Description", task.Description);
                    insertCommand.Parameters.AddWithValue("$CreatedDate", task.CreatedDate);
                    insertCommand.Parameters.AddWithValue("$DueDate", task.DueDate);
                    insertCommand.Parameters.AddWithValue("$IsCompleted", task.IsCompleted.ToString());
                    insertCommand.Parameters.AddWithValue("$User", task.User);
                    insertCommand.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }

            return true;
        }

        [HttpPut("{id}")]
        public bool UpdateTask([FromRoute] int id, [FromBody] TaskManagementApi.Models.Task task)
        {
            try
            {
                using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
                {
                    conn.Open();
                    SqliteCommand updateCommand = new SqliteCommand(@"UPDATE Tasks SET Title=$Title, Description=$Description, CreatedDate=$CreatedDate, DueDate=$DueDate, IsCompleted=$IsCompleted, User=$User WHERE Id=" + id, conn);
                    updateCommand.Parameters.AddWithValue("$Title", task.Title);
                    updateCommand.Parameters.AddWithValue("$Description", task.Description);
                    updateCommand.Parameters.AddWithValue("$CreatedDate", task.CreatedDate);
                    updateCommand.Parameters.AddWithValue("$DueDate", task.DueDate);
                    updateCommand.Parameters.AddWithValue("$IsCompleted", task.IsCompleted.ToString());
                    updateCommand.Parameters.AddWithValue("$User", task.User);
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
        public bool DeleteTask([FromRoute] int id)
        {
            using (SqliteConnection conn = new SqliteConnection($"Filename={_filePath}"))
            {
                conn.Open();
                SqliteCommand deleteCommand = new SqliteCommand("DELETE FROM Tasks WHERE Id=" + id, conn);
                deleteCommand.ExecuteNonQuery();
            }
            return true;
        }
    }
}
