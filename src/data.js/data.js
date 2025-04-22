const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    completedTask: 1,
    workingTask: 1,
    tasks: [
      {
        taskId: 101,
        title: "Design login page",
        description: "Create a modern login UI with validations",
        completed: true,
        newTask: false,
        accepted: true,
      },
      {
        taskId: 102,
        title: "Fix navbar responsiveness",
        description: "Ensure navbar works on mobile and tablets",
        completed: false,
        newTask: true,
        accepted: false,
      },
    ],
  },
  {
    id: 2,
    name: "Sneha Verma",
    email: "sneha.verma@example.com",
    completedTask: 2,
    workingTask: 0,
    tasks: [
      {
        taskId: 201,
        title: "Create API endpoints",
        description: "Develop RESTful APIs for user module",
        completed: true,
        newTask: false,
        accepted: true,
      },
      {
        taskId: 202,
        title: "Add JWT authentication",
        description: "Secure login with JWT tokens",
        completed: true,
        newTask: false,
        accepted: true,
      },
    ],
  },
  {
    id: 3,
    name: "Karan Mehta",
    email: "karan.mehta@example.com",
    completedTask: 0,
    workingTask: 2,
    tasks: [
      {
        taskId: 301,
        title: "Schedule interviews",
        description: "Coordinate with candidates for interviews",
        completed: false,
        newTask: true,
        accepted: false,
      },
      {
        taskId: 302,
        title: "Review onboarding process",
        description: "Audit documents and streamline onboarding",
        completed: false,
        newTask: true,
        accepted: false,
      },
    ],
  },
  {
    id: 4,
    name: "Pooja Nair",
    email: "pooja.nair@example.com",
    completedTask: 1,
    workingTask: 0,
    tasks: [
      {
        taskId: 401,
        title: "Prepare monthly report",
        description: "Compile data for monthly performance",
        completed: true,
        newTask: false,
        accepted: true,
      },
    ],
  },
  {
    id: 5,
    name: "Rohan Das",
    email: "rohan.das@example.com",
    completedTask: 1,
    workingTask: 1,
    tasks: [
      {
        taskId: 501,
        title: "Draft ad campaign content",
        description: "Write copies for social media ads",
        completed: false,
        newTask: true,
        accepted: false,
      },
      {
        taskId: 502,
        title: "Update blog posts",
        description: "Revise and refresh existing blog content",
        completed: true,
        newTask: false,
        accepted: true,
      },
    ],
  },
];

export default employees;
  
  
  