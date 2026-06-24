// Data for Educenter website
const siteData = {
  courses: [
    {
      title: "Photography",
      image: "/assets/images/courses/course-1.jpg",
      duration: "06 Month",
      category: "Photography",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Mathematics",
      image: "/assets/images/courses/course-2.jpg",
      duration: "06 Month",
      category: "Mathematics",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Artificial Intelligence",
      image: "/assets/images/courses/course-3.jpg",
      duration: "06 Month",
      category: "Artificial Intelligence",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "JavaScript",
      image: "/assets/images/courses/course-4.jpg",
      duration: "06 Month",
      category: "Programming",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Algorithm",
      image: "/assets/images/courses/course-5.jpg",
      duration: "06 Month",
      category: "Programming",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Vlogging",
      image: "/assets/images/courses/course-6.jpg",
      duration: "06 Month",
      category: "Photography",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ],
  events: [
    {
      title: "Social media and behavior economics conference",
      image: "/assets/images/events/event-1.jpg",
      location: "Dhanmondi, Dhaka",
      date: "09 Mar, 2030",
      fee: "From: $699"
    },
    {
      title: "Social media and behavior economics conference",
      image: "/assets/images/events/event-2.jpg",
      location: "Dhanmondi, Dhaka",
      date: "09 Mar, 2030",
      fee: "From: $699"
    },
    {
      title: "Social media and behavior economics conference",
      image: "/assets/images/events/event-3.jpg",
      location: "Dhanmondi, Dhaka",
      date: "09 Mar, 2030",
      fee: "From: $699"
    }
  ],
  blog: [
    {
      title: "Elegant Light Box Paper Cut Dioramas",
      image: "/assets/images/blog/post-1.jpg",
      author: "John Doe",
      date: "06 Jul, 2019",
      categories: ["Automation System"],
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Elegant Light Box Paper Cut Dioramas",
      image: "/assets/images/blog/post-2.jpg",
      author: "John Doe",
      date: "06 Jul, 2019",
      categories: ["Education System"],
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Elegant Light Box Paper Cut Dioramas",
      image: "/assets/images/blog/post-3.jpg",
      author: "Mark Dinn",
      date: "06 Jul, 2019",
      categories: ["Eco System"],
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ],
  notices: [
    { title: "Teaching Materials and Testing Methods", date: "06 Jul, 2019" },
    { title: "Teaching Materials and Testing Methods", date: "06 Jul, 2019" },
    { title: "Teaching Materials and Testing Methods", date: "06 Jul, 2019" }
  ],
  teachers: [
    {
      title: "Clark Malik",
      image: "/assets/images/teachers/teacher-1.jpg",
      course: "Computer Science"
    },
    {
      title: "Jacke Mastio",
      image: "/assets/images/teachers/teacher-2.jpg",
      course: "Computer Science"
    },
    {
      title: "Devid Luis",
      image: "/assets/images/teachers/teacher-3.jpg",
      course: "Humanities"
    }
  ],
  research: [
    {
      title: "Geography",
      image: "/assets/images/research/research-1.jpg",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Geography",
      image: "/assets/images/research/research-2.jpg",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Geography",
      image: "/assets/images/research/research-3.jpg",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ],
  scholarships: [
    {
      title: "CHEMICAL ENGINEERING",
      image: "/assets/images/scholarship/scholarship-item-1.jpg",
      content: "<ul><li>institutes</li><li>Smart-affiliated research</li><li>Digital Access to Scholarship</li><li>Smart Catalyst</li><li>Smart Library Portal</li><li>Smart research programs</li></ul>"
    },
    {
      title: "CHEMICAL ENGINEERING",
      image: "/assets/images/scholarship/scholarship-item-2.jpg",
      content: "<ul><li>institutes</li><li>Smart-affiliated research</li><li>Digital Access to Scholarship</li><li>Smart Catalyst</li><li>Smart Library Portal</li><li>Smart research programs</li></ul>"
    },
    {
      title: "CHEMICAL ENGINEERING",
      image: "/assets/images/scholarship/scholarship-item-3.jpg",
      content: "<ul><li>institutes</li><li>Smart-affiliated research</li><li>Digital Access to Scholarship</li><li>Smart Catalyst</li><li>Smart Library Portal</li><li>Smart research programs</li></ul>"
    }
  ]
};

// Helper functions for rendering
function renderCourseCard(course) {
  return `
    <div class="col-lg-4 col-sm-6 mb-5">
      <div class="card p-0 border-primary rounded-0 hover-shadow">
        <img src="${course.image}" alt="${course.title}" class="card-img-top rounded-0">
        <div class="card-body">
          <ul class="list-inline mb-2">
            <li class="list-inline-item"><i class="ti-calendar"></i> ${course.duration}</li>
            <li class="list-inline-item"><i class="ti-bookmark-alt"></i> ${course.category}</li>
          </ul>
          <h4 class="card-title"><a href="#">${course.title}</a></h4>
          <p class="card-text mb-4">${course.summary}</p>
          <a href="pages/contact.html" class="btn btn-primary btn-sm">Apply now</a>
        </div>
      </div>
    </div>
  `;
}

function renderEventCard(event) {
  const dateParts = event.date.split(' ');
  return `
    <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
      <div class="card border-0 rounded-0 hover-shadow">
        <div class="card-img position-relative">
          <img src="${event.image}" alt="${event.title}" class="card-img-top rounded-0">
          <div class="card-date"><span>${dateParts[0]}</span><br>${dateParts[1]}</div>
        </div>
        <div class="card-body">
          <p><i class="ti-location-pin text-primary mr-2"></i>${event.location}</p>
          <h4 class="card-title"><a href="#">${event.title}</a></h4>
        </div>
      </div>
    </div>
  `;
}

function renderBlogPost(post) {
  return `
    <article class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
      <div class="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
        <img src="${post.image}" alt="${post.title}" class="card-img-top rounded-0">
        <div class="card-body">
          <ul class="list-inline mb-3">
            <li class="list-inline-item mr-3 ml-0"><i class="ti-calendar"></i> ${post.date}</li>
            <li class="list-inline-item mr-3 ml-0"><i class="ti-user"></i> <a href="#">${post.author}</a></li>
          </ul>
          <h4 class="card-title"><a href="#">${post.title}</a></h4>
          <p class="card-text">${post.summary}</p>
          <a href="#" class="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    </article>
  `;
}

function renderTeacherCard(teacher) {
  return `
    <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
      <div class="card border-0 rounded-0 hover-shadow mb-5">
        <img src="${teacher.image}" alt="${teacher.title}" class="card-img-top rounded-0">
        <div class="card-body">
          <h4 class="card-title"><a href="#">${teacher.title}</a></h4>
          <p>${teacher.course}</p>
          <ul class="list-inline">
            <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-facebook"></i></a></li>
            <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-twitter-alt"></i></a></li>
            <li class="list-inline-item"><a class="text-color" href="#"><i class="ti-skype"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

function renderNoticeCard(notice) {
  const day = notice.date.split(' ')[0];
  const monthYear = notice.date.split(' ').slice(1).join(', ');
  return `
    <li class="d-md-table mb-4 w-100 border-bottom hover-shadow">
      <div class="d-md-table-cell text-center p-4 bg-primary text-white mb-4 mb-md-0"><span class="h2 d-block">${day}</span> ${monthYear}</div>
      <div class="d-md-table-cell px-4 vertical-align-middle mb-4 mb-md-0">
        <a href="#" class="h4 mb-3 d-block">${notice.title}</a>
        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <div class="d-md-table-cell text-right pr-0 pr-md-4"><a href="#" class="btn btn-primary">Read More</a></div>
    </li>
  `;
}

function renderResearchCard(research) {
  return `
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
        <img src="${research.image}" alt="${research.title}" class="card-img-top rounded-0">
        <div class="card-body">
          <h4 class="card-title"><a href="#">${research.title}</a></h4>
          <p class="card-text">${research.summary}</p>
        </div>
      </div>
    </div>
  `;
}

function renderScholarshipCard(scholarship) {
  return `
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
        <img src="${scholarship.image}" alt="${scholarship.title}" class="card-img-top rounded-0">
        <div class="card-body">
          <h4 class="card-title mb-3">${scholarship.title}</h4>
          <div class="content">${scholarship.content}</div>
        </div>
      </div>
    </div>
  `;
}

// Initialize content on page load
document.addEventListener('DOMContentLoaded', function() {
  // Load courses
  const coursesContainer = document.getElementById('courses-container');
  if (coursesContainer) {
    coursesContainer.innerHTML = siteData.courses.map(renderCourseCard).join('');
  }

  // Load events
  const eventsContainer = document.getElementById('events-container');
  if (eventsContainer) {
    eventsContainer.innerHTML = siteData.events.map(renderEventCard).join('');
  }

  // Load blog
  const blogContainer = document.getElementById('blog-container');
  if (blogContainer) {
    blogContainer.innerHTML = siteData.blog.map(renderBlogPost).join('');
  }

  // Load footer courses
  const footerCourses = document.getElementById('footer-courses');
  if (footerCourses) {
    footerCourses.innerHTML = siteData.courses.slice(0, 5).map(c =>
      `<li class="mb-3"><a class="text-color" href="#">${c.title}</a></li>`
    ).join('');
  }

  // Load footer notices
  const footerNotices = document.getElementById('footer-notices');
  if (footerNotices) {
    footerNotices.innerHTML = siteData.notices.slice(0, 3).map(n =>
      `<li class="mb-3"><a class="text-color" href="#">${n.title}</a></li>`
    ).join('');
  }

  // Load teachers on teachers page
  const teachersContainer = document.getElementById('teachers-container');
  if (teachersContainer) {
    teachersContainer.innerHTML = siteData.teachers.map(renderTeacherCard).join('');
  }

  // Load notices on notice page
  const noticesContainer = document.getElementById('notices-container');
  if (noticesContainer) {
    noticesContainer.innerHTML = siteData.notices.map(renderNoticeCard).join('');
  }

  // Load research on research page
  const researchContainer = document.getElementById('research-container');
  if (researchContainer) {
    researchContainer.innerHTML = siteData.research.map(renderResearchCard).join('');
  }

  // Load scholarships on scholarship page
  const scholarshipContainer = document.getElementById('scholarship-container');
  if (scholarshipContainer) {
    scholarshipContainer.innerHTML = siteData.scholarships.map(renderScholarshipCard).join('');
  }

  // Load all courses on courses page
  const allCoursesContainer = document.getElementById('all-courses-container');
  if (allCoursesContainer) {
    allCoursesContainer.innerHTML = siteData.courses.map(renderCourseCard).join('');
  }

  // Load all events on events page
  const allEventsContainer = document.getElementById('all-events-container');
  if (allEventsContainer) {
    allEventsContainer.innerHTML = siteData.events.map(renderEventCard).join('');
  }

  // Load all blog posts on blog page
  const allBlogContainer = document.getElementById('all-blog-container');
  if (allBlogContainer) {
    allBlogContainer.innerHTML = siteData.blog.map(renderBlogPost).join('');
  }
});
