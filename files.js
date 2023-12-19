function convertJson(skills, education, experience, additional) {
    document.getElementById("file-editor").value = JSON.stringify(
        {
            "skills": skills,
            "education": education,
            "experience": experience,
            "additional": additional
        }, undefined, 4
    );
}