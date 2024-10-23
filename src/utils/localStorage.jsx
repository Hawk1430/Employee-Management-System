const employees = [
  {
    id: 1,
    firstName: "John",
    email: "john.doe@example.com",
    password: "password123",
    taskNumber: 3,
    activeTasks: 2,
    newTasks: 1,
    completedTasks: 0,
    failedTasks: 0,
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile and submit the monthly performance report.",
        taskDate: "2024-10-22",
        category: "Reporting",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Client Database",
        taskDescription: "Ensure all client information is up to date.",
        taskDate: "2024-10-25",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting Preparation",
        taskDescription:
          "Create agenda and presentation for the weekly team meeting.",
        taskDate: "2024-10-24",
        category: "Meetings",
      },
    ],
  },
  {
    id: 2,
    firstName: "Jane",
    email: "jane.smith@example.com",
    password: "password456",
    taskNumber: 3,
    activeTasks: 1,
    newTasks: 1,
    completedTasks: 1,
    failedTasks: 0,
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Follow-Up",
        taskDescription:
          "Reach out to pending clients and resolve their queries.",
        taskDate: "2024-10-23",
        category: "Customer Service",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Project Documentation",
        taskDescription:
          "Complete the documentation for the new project release.",
        taskDate: "2024-10-20",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Marketing Campaign",
        taskDescription: "Plan the marketing campaign for the new product.",
        taskDate: "2024-10-30",
        category: "Marketing",
      },
    ],
  },
  {
    id: 3,
    firstName: "Alice",
    email: "alice.jones@example.com",
    password: "password789",
    taskNumber: 3,
    activeTasks: 1,
    newTasks: 1,
    completedTasks: 0,
    failedTasks: 1,
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Logo",
        taskDescription: "Create new logo designs for the upcoming product.",
        taskDate: "2024-10-28",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription:
          "Address bugs reported in the recent software release.",
        taskDate: "2024-10-22",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Vendor Negotiation",
        taskDescription:
          "Negotiate terms with new vendors for the supply chain.",
        taskDate: "2024-10-19",
        category: "Operations",
      },
    ],
  },
  {
    id: 4,
    firstName: "Michael",
    email: "michael.brown@example.com",
    password: "password101",
    taskNumber: 4,
    activeTasks: 2,
    newTasks: 1,
    completedTasks: 1,
    failedTasks: 0,
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Update",
        taskDescription:
          "Update social media pages with the latest product launch.",
        taskDate: "2024-10-23",
        category: "Social Media",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Inventory Check",
        taskDescription: "Conduct a full inventory check and update records.",
        taskDate: "2024-10-18",
        category: "Inventory",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Sales Pitch",
        taskDescription:
          "Prepare and present the sales pitch for a potential client.",
        taskDate: "2024-10-21",
        category: "Sales",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Mobile App",
        taskDescription:
          "Work on the development of the company's new mobile app.",
        taskDate: "2024-10-27",
        category: "Development",
      },
    ],
  },
  {
    id: 5,
    firstName: "Emily",
    email: "emily.davis@example.com",
    password: "password202",
    taskNumber: 4,
    activeTasks: 1,
    newTasks: 1,
    completedTasks: 1,
    failedTasks: 1,
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Organize Webinar",
        taskDescription: "Plan and organize a webinar on industry trends.",
        taskDate: "2024-10-29",
        category: "Events",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Blog Post",
        taskDescription:
          "Create a blog post about the latest features of our software.",
        taskDate: "2024-10-16",
        category: "Content",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Customer Feedback",
        taskDescription:
          "Collect and analyze customer feedback for improvements.",
        taskDate: "2024-10-24",
        category: "Customer Service",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Budget Planning",
        taskDescription: "Prepare budget plans for the next quarter.",
        taskDate: "2024-10-15",
        category: "Finance",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "adminpass",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
