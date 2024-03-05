const resume = {
    name: "Doughlaus Prashaal",
    email: "doughlausprashaal100@gmail.com",
    phone: "6382445922",
    address: "#23 Sri Garden Vilankurchi Road Coimbatore India",
    summary: "Experienced software engineer with a passion for creating innovative solutions. Proficient in various programming languages and technologies.",
    education: [
      {
        degree: "Bachelor of Commerce",
        institution: "PPG College of arts and science",
        location: "Coimbatore, India",
        graduation_year: 2021
      },
      {
        degree: "12th",
        institution: "GRD Matric Higher Secondary School",
        location: "Coimbatore, India",
        graduation_year: 2018
      }
    ],
    experience: [
      {
        title: "Technical Implementation engineer",
        company: "Go Loop Solutions Pvt Ltd",
        location: "Gurugram, India",
        start_date: "2023-08-01",
        end_date: "2024-01-31",
        responsibilities: [
          "Perform Migrations for customer data",
          "Develop Auomation scripts to simplify the migration process",
          "Worked on Development and installation of Widget in customers online stores"
        ]
      },
      {
        title: "Software Engineer",
        company: "Magnusvistsa Technologies",
        location: "Coimbatore, India",
        start_date: "2022-01-01",
        end_date: "2023-07-31",
        responsibilities: [
          "Assisted senior developers in software development tasks",
          "Participated in team meetings and contributed ideas for project improvements"
        ]
      }
    ],
    skills: [
      "JavaScript",
      "Python",
      "Java",
      "Git",
      "C","C++",
      "HTML/CSS",
      "SQL",
      "Sharepoint",
      "PowerApps",
      "PowerAutomate"
    ],
    languages: ["English", "Tamil"],
    references: [
      {
        name: "Vivek Agarwal",
        company: "GO Loop solutions private ltd",
        email: "vivek@loopwork.co",
        phone: " 8743010910"
      },
      {
        name: "Karthikeyan K",
        company: "Magnusvista Technologies",
        email: "karthik@magnusvista.com",
        phone: "555-123-4567"
      }
    ]}

// Using for loop    
const resumeKeys = Object.keys(resume);
for (let i = 0; i < resumeKeys.length; i++) {
    const key = resumeKeys[i];
    const value = resume[key];

    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        console.log(key + ":");
        // Loop through the array
        for (let j = 0; j < value.length; j++) {
            const obj = value[j];
            console.log("");
            // Iterate through each key-value pair of the object
            const objKeys = Object.keys(obj);
            for (let k = 0; k < objKeys.length; k++) {
                const objKey = objKeys[k];
                console.log(`    ${objKey}: ${obj[objKey]}`);
            }
        }
    } else {
        console.log(key + ": " + value);
    }
}

// using for in
console.log("For In Loop")
for (const key in resume) {
    const value = resume[key];

    if (Array.isArray(value)) {
        if (value.length > 0 && typeof value[0] === 'object') {
            console.log(key + ":");
            // Loop through the array
            for (let i = 0; i < value.length; i++) {
                console.log("");
                // Iterate through each key-value pair of the object
                const obj = value[i];
                for (const objKey in obj) {
                    console.log(`    ${objKey}: ${obj[objKey]}`);
                }
            }
        } else {
            console.log(key + ": " + value.join(","));
        }
    } else {
        console.log(key + ": " + value);
    }
}

console.log("For of loop")

for (const [key, value] of Object.entries(resume)) {
    if (Array.isArray(value)) {
        if (value.length > 0 && typeof value[0] === 'object') {
            console.log(key + ":");
            // Loop through the array
            for (const obj of value) {
                console.log("");
                // Iterate through each key-value pair of the object
                for (const [objKey, objValue] of Object.entries(obj)) {
                    console.log(`    ${objKey}: ${objValue}`);
                }
            }
        } else {
            console.log(key + ": " + value.join(","));
        }
    } else {
        console.log(key + ": " + value);
    }
}

console.log("For Each loop")
Object.entries(resume).forEach(([key, value]) => {
    if (Array.isArray(value)) {
        if (value.length > 0 && typeof value[0] === 'object') {
            console.log(key + ":");
            // Loop through the array
            value.forEach(obj => {
                console.log("");
                // Iterate through each key-value pair of the object
                Object.entries(obj).forEach(([objKey, objValue]) => {
                    console.log(`    ${objKey}: ${objValue}`);
                });
            });
        } else {
            console.log(key + ": " + value.join(","));
        }
    } else {
        console.log(key + ": " + value);
    }
});