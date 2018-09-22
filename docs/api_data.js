define({ "api": [
  {
    "type": "POST",
    "url": "/auth/sign_in",
    "title": "User login",
    "name": "SignIn",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Login confirmation message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"msg\": \"User logged.\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"This user/password does not correspond to a valid user.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/auth/signIn.js",
    "groupTitle": "Auth"
  },
  {
    "type": "GET",
    "url": "/auth/sign_out",
    "title": "User sign out",
    "name": "Sign_Out",
    "group": "Auth",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "session",
            "description": "<p>User session key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Sign out confirmation message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"msg\": \"User logged out\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/auth/signOut.js",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/sign_up",
    "title": "User sign up",
    "name": "Sign_Up",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Users name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n  \"name\": \"User example\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"E-mail not valid.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/auth/signUp.js",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/projects",
    "title": "New project",
    "name": "New_project",
    "group": "Projects",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "session",
            "description": "<p>Users session.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Projects name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Projects description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tags",
            "description": "<p>Tags related to project</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "skills",
            "description": "<p>Skills needed in project</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>New projects info.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Projects id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Projects name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Projects description.</p>"
          },
          {
            "group": "200",
            "type": "String[]",
            "optional": true,
            "field": "tags",
            "description": "<p>Tags related to project</p>"
          },
          {
            "group": "200",
            "type": "String[]",
            "optional": true,
            "field": "skills",
            "description": "<p>Skills needed in project</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"msg\": {\n  \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n  \"name\": \"Project example\",\n  \"description\": \"Project description example\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response: ",
          "content": "{ \"msg\": \"Name not valid.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/projects/newProject.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects",
    "title": "Retrieve projects",
    "name": "Retrieve_projects",
    "group": "Projects",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "msg",
            "description": "<p>Projects list.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Project id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Project name.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Project description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"msg\": [\n    {\n      \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n      \"name\": \"Project example\",\n      \"description\": \"Project description example\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"Database connection error.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/projects/retrieveProject.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/skills",
    "title": "New skill",
    "name": "New_skill",
    "group": "Skills",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Skills name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>New skills info.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Skills id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Skills name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"msg\": {\n  \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n  \"name\": \"Skill example\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"Name not valid.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/skills/newSkill.js",
    "groupTitle": "Skills"
  },
  {
    "type": "GET",
    "url": "/skills",
    "title": "Retrieve skills",
    "name": "Retrieve_skills",
    "group": "Skills",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "msg",
            "description": "<p>Skills list.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Skills id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Skills name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"msg\": [\n    {\n      \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n      \"name\": \"Skill example\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"Database connection error.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/skills/retrieveSkills.js",
    "groupTitle": "Skills"
  },
  {
    "type": "POST",
    "url": "/tags",
    "title": "New tag",
    "name": "New_tag",
    "group": "Tags",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tags name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>New tags info.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Tags id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tags name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"msg\": {\n  \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n  \"name\": \"Tag example\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"Name not valid.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/tags/newTag.js",
    "groupTitle": "Tags"
  },
  {
    "type": "GET",
    "url": "/tags",
    "title": "Retrieve tags",
    "name": "Retrieve_tags",
    "group": "Tags",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "msg",
            "description": "<p>Tags list.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Tags id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tags name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"msg\": [\n    {\n      \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n      \"name\": \"Tag example\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"Database connection error.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/tags/retrieveTags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "POST",
    "url": "/technologies",
    "title": "New technology",
    "name": "New_technology",
    "group": "Technologies",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Technologies name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>New Technologies info.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Technologies id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Technologies name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"msg\": {\n  \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n  \"name\": \"Technology example\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"Name not valid.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/technologies/newTechnology.js",
    "groupTitle": "Technologies"
  },
  {
    "type": "GET",
    "url": "/technologies",
    "title": "Retrieve technologies",
    "name": "Retrieve_technologies",
    "group": "Technologies",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "msg",
            "description": "<p>Technologies list.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Technologys id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Techonologys name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"msg\": [\n    {\n      \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n      \"name\": \"Technology example\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"Database connection error.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/technologies/retrieveTechnologies.js",
    "groupTitle": "Technologies"
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "Retrieve users info",
    "name": "Retrieve_info",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "session",
            "description": "<p>User session key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "msg",
            "description": "<p>Users info.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users id.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Users name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"msg\": [\n    {\n      \"id\": \"012a362a-4f32-496f-bf25-d785d4df42ed\",\n      \"name\": \"User example\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Invalid session message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"msg\": \"You have to be logged in to access this feature.\" }",
          "type": "json"
        }
      ]
    },
    "filename": "server/controllers/user/userInfo.js",
    "groupTitle": "User"
  }
] });
