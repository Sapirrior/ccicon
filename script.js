function uuidgen() {
	const button = document.getElementById('uuid-button');
	const uuid = document.getElementById('uuid-show');
	
	uuid.value = crypto.randomUUID();
};

function json() {
      const jsonText = document.getElementById("jsonEditorArea").value;
      const con = document.getElementById('jsonConsole');
      try {
        const parsedJson = JSON.parse(jsonText);
        const formattedJson = JSON.stringify(parsedJson, null, 2); // Indent with 2 spaces
        document.getElementById("jsonEditorArea").value = formattedJson;
        con.value = 'No Errors!';
      } catch (error) {
      	con.value = `Error: ${error.message}`;
      };
    };