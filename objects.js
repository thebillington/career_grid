class Skill {
    constructor(title, start_year, end_year, colour=randomColour()) {
        this.title = title;
        this.start_year = start_year;
        this.end_year = end_year;
        this.colour = colour;
    }
}

class Education {
    constructor(school, course, start_year, end_year, colour=randomColour()) {
        this.school = school;
        this.course = course;
        this.start_year = start_year;
        this.end_year = end_year;
        this.colour = colour;
    }
}

class Experience {
    constructor(role, company, start_month, start_year, end_month, end_year, colour=randomColour()) {
        this.role = role;
        this.company = company;
        this.start_month = start_month;
        this.end_month = end_month;
        this.start_year = start_year;
        this.end_year = end_year;
        this.colour = colour;
    }
}

function randomColour() {
	return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
}