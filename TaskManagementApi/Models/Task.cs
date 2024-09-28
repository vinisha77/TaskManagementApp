namespace TaskManagementApi.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public string CreatedDate { get; set; }
        public string DueDate { get; set; }
        public bool IsCompleted { get; set; }

        public string User { get; set; } = "";
    }

}
