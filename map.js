let tile_width, tile_height;
let lowest_year, highest_year, work_years;
let skills, educations, roles, others;

let title_height = 4;
let section_titles = 1;
let bottom_padding = 1;
let months = 12;
let title_width = 6;
let horizontal_padding = 3;

const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];

function setup() {
	var cnvHolder = document.getElementById("career-map");
	var cnv = createCanvas(cnvHolder.offsetWidth, cnvHolder.offsetHeight);
	cnv.parent("career-map");
	reloadData();
	setupGrid();
}

function draw() {
    clear();
	drawSkillsGrid();
	drawWorkExGrid();
	drawEducationGrid();
	drawRolesGrid();
	drawOthersGrid();
	noLoop();
}

function reloadData() {
	skills = [
		new Skill("Programming", 2013, 2023),
		new Skill("Teaching", 2016, 2023),
		new Skill("Scheme of Work Design", 2016, 2019)
	];
	educations = [
		new Education("Newcastle University", "Computer Science", 2013, 2016),
		new Education("Leeds Trinity University", "PGCE Computer Science", 2016, 2017)
	];
	roles = [
		new Experience("Sandwell Academy", "Teacher of Computer Science", 7, 2017, 6, 2019),
		new Experience("Appoly", "Junior Application Developer", 6, 2019, 9, 2020)
	];
	others = [
		new Additional("Lead Volunteer", "Coder Dojo", 2022, 2023)
	];
}

function calculateYears() {

	temp_arr = skills.concat(educations).concat(roles).concat(others);
	lowest_year = temp_arr[0].start_year;
	highest_year = temp_arr[0].end_year;
	for (var i = 1; i < skills.concat(educations).concat(roles).concat(others); i++) {
		if (temp_arr[i].start_year < lowest_year) lowest_year = temp_arr[i].start_year;
		if (temp_arr[i].end_year > end_year) end_year = temp_arr[i].end_year;
	}

	work_years = highest_year - lowest_year + 1;
}

function setupGrid() {

	calculateYears();
	
	total_squares_y = title_height +
		skills.length +
		educations.length +
		roles.length +
		others.length +
		months +
		(5 * (section_titles + bottom_padding));

	total_squares_x =
		title_width +
		work_years +
		(2 * horizontal_padding);

	tile_width = width / total_squares_x;
	tile_height = height / total_squares_y;
}

function drawSkillsGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title_height + 1) * tile_height;

	for (var i = 0; i < skills.length; i++) {
		y_coord = offset_y + (i * tile_height);
		noFill();
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		fill("black");
		writeText(skills[i].title, offset_x + 2, y_coord + tile_height - 4, tile_height - 4, title_width * tile_width);
		for (var j = 0; j < work_years; j++) {
			year = lowest_year + j;
			if (year >= skills[i].start_year && year <= skills[i].end_year) {
				fill(skills[i].colour);
			} else {
				noFill();
			}
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}
}

function drawWorkExGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title_height + 3 + skills.length) * tile_height ;

	for (var month = 0; month < months; month++) {
		y_coord = offset_y + (month * tile_height);
		noFill();
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		fill("black");
		writeText(MONTHS[month], offset_x + 2, y_coord + tile_height - 4, tile_height - 4, title_width * tile_width);
		for (var j = 0; j < work_years; j++) {
			year = lowest_year + j;
			for (k = 0; k < roles.length; k++) {
				if (year >= roles[k].start_year && year <= roles[k].end_year) {
					fill(roles[k].colour);
					break;
				} else {
					noFill();
				}
			}
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}

}

function drawEducationGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title_height + 5 + skills.length + months) * tile_height ;

	for (var i = 0; i < educations.length; i++) {
		y_coord = offset_y + (i * tile_height);
		noFill();
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		fill("black");
		writeText(educations[i].school, offset_x + 2, y_coord + tile_height - 4, tile_height - 4, title_width * tile_width);
		for (var j = 0; j < work_years; j++) {
			year = lowest_year + j;
			if (year >= educations[i].start_year && year <= educations[i].end_year) {
				fill(educations[i].colour);
			} else {
				noFill();
			}
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}

}

function drawRolesGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title_height + 7 + skills.length + months + educations.length) * tile_height ;

	for (var i = 0; i < roles.length; i++) {
		y_coord = offset_y + (i * tile_height);
		noFill();
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		fill("black");
		writeText(roles[i].role, offset_x + 2, y_coord + tile_height - 4, tile_height - 4, title_width * tile_width);
		for (var j = 0; j < work_years; j++) {
			year = lowest_year + j;
			if (year >= roles[i].start_year && year <= roles[i].end_year) {
				fill(roles[i].colour);
			} else {
				noFill();
			}
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}
}

function drawOthersGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title_height + 9 + skills.length + months + educations.length + roles.length) * tile_height ;

	for (var i = 0; i < others.length; i++) {
		y_coord = offset_y + (i * tile_height);
		noFill();
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		fill("black");
		writeText(others[i].role, offset_x + 2, y_coord + tile_height - 4, tile_height - 4, title_width * tile_width);
		for (var j = 0; j < work_years; j++) {
			year = lowest_year + j;
			console.log(year);
			if (year >= others[i].start_year && year <= others[i].end_year) {
				fill(others[i].colour);
			} else {
				noFill();
			}
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}
}

function writeText(t, x, y, desiredSize, maxWidth) {
	textSize(desiredSize);
	textAlign("center");
	while (textWidth(t) > maxWidth - 10) {
		desiredSize = desiredSize - 1;
		textSize(desiredSize);
	}
	text(t, x + maxWidth/2, y);
}

function update() {
	loop();
}