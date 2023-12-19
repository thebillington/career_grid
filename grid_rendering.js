let tile_width, tile_height;

// Calculate total number of needed tiles on the y axis
title = 4;
skills = 5;
months = 12
educations = 3;
roles = 5;
others = 2;

section_titles = 1;
bottom_padding = 1;

// Calculate total numeber of squares needed on the x axis
title_width = 6;
work_years = 13;
horizontal_padding = 3;

function setup() {
	var cnvHolder = document.getElementById("career-map");
	var cnv = createCanvas(cnvHolder.offsetWidth, cnvHolder.offsetHeight);
	cnv.parent("career-map");
	setupGrid();
}

function setupGrid() {
	total_squares_y = title + skills + months + educations + roles + others + (5 * section_titles) + (5 * bottom_padding);
	total_squares_x = title_width + work_years + (2 * horizontal_padding);

	// Calculate square width and height
	tile_height = height / total_squares_y;
	tile_width = width / total_squares_x;
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

function drawSkillsGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title + 1) * tile_height;

	for (var i = 0; i < skills; i++) {
		y_coord = offset_y + (i * tile_height);
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		for (var j = 0; j < work_years; j++) {
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}
}

function drawWorkExGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title + 3 + skills) * tile_height ;

	for (var i = 0; i < months; i++) {
		y_coord = offset_y + (i * tile_height);
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		for (var j = 0; j < work_years; j++) {
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}

}

function drawEducationGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title + 5 + skills + months) * tile_height ;

	for (var i = 0; i < educations; i++) {
		y_coord = offset_y + (i * tile_height);
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		for (var j = 0; j < work_years; j++) {
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}

}

function drawRolesGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title + 7 + skills + months + educations) * tile_height ;

	for (var i = 0; i < roles; i++) {
		y_coord = offset_y + (i * tile_height);
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		for (var j = 0; j < work_years; j++) {
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}
}

function drawOthersGrid() {
	
	offset_x = horizontal_padding * tile_width;
	offset_y = (title + 9 + skills + months + educations + roles) * tile_height ;

	for (var i = 0; i < others; i++) {
		y_coord = offset_y + (i * tile_height);
		rect(offset_x, y_coord, title_width * tile_width, tile_height);
		for (var j = 0; j < work_years; j++) {
			x_coord = offset_x + ((title_width + j) * tile_width);
			rect(x_coord, y_coord, tile_width, tile_height);
		}
	}
}

function updateGrid() {
	loop();
}