
(function () {
    window.addEventListener("load", function sendingDocumentsForProcessing() {
        var username = "s42q9631q8qu";
        var password = "tl85983onqhe4v3";
        var url = "https://text.s4.ontotext.com/v1/twitie";
        var method = "POST";

        var inputString = "A team of researchers may have identified a molecule present in the body that stimulates the production of insulin-producing beta cells, which are lacking in individuals with type 1 diabetes, as well as developed a compound that protects this molecule. The Swiss Federal Institute of Technology researchers said they hope their findings could eventually be used to develop medications that allow individuals with type 1 diabetes to regrow beta cells, essentially resolving the condition. The team's findings are a tale of two proteins. Several years ago, the same group of researchers discovered that beta cells die when a molecule known as Tmem27 is removed from their outer surface. In the latest findings, the team discovered that a second protein, known as Bace2 can destroy Tmem27. You may be interested in these related articles: Type 2 diabetes medication could be useful in controlling blood sugar of type 1 diabetics Researchers identify molecular pathway that may become target of type 1 diabetes and type 2 diabetes medications Researchers find way to create stem cells for type 1 diabetes treatment Existing medication may reverse symptoms of type 1 diabetes Further investigation allowed the researchers to create a chemical molecule that interferes with the activity of Bace2, thereby preventing it from eliminating the beneficial Tmem27. In testing on mice, the team found that this treatment resulted in the regrowth of beta cells and the resolution of type 1 diabetes symptoms. The findings have the potential to lead to the development of new medications that could essentially cure many of the symptoms of type 1 diabetes. This could be a major advancement in the treatment of the condition. Up until now, individuals with type 1 diabetes have had to test their blood sugar levels throughout the day and take insulin injections when it gets too high. Since their bodies are unable to produce insulin on their own, these people are completely dependent on injections. A medication that helps spur the growth of insulin-producing beta cells could free individuals from their reliance on external sources of the hormone. This may enable their metabolic systems to function normally without medications. Since type 1 diabetes is one of the most intensive and expensive conditions to care for, this could represent a major advancement.   Last updated on 09\/14\/2011 You May Also Like: Type 1 Diabetes in Children: Other Autoimmune Conditions to Watch For Type 2 Diabetes in Adults: How Can the PCP Reinforce Diabetes Management? Diabetes Lifestyle Tips: Preparing Your Patients for Travel Type 1 Diabetes Slideshow Anaplastic Thyroid Cancer Diabetes Follicular Thyroid Cancer Hypothyroidism Medullary Thyroid Cancer Menopause Obesity Osteoporosis Papillary Thyroid Cancer Thyroid Cancer Thyroid Diseases Type 1 Diabetes Type 2 Diabetes Send me updates for the following endocrine topics to my inbox. Hyperglycemia Hypoglycemia EndocrineWeb Ask questions. Share your opinions. Get advice. Join Now";
 

        var postData = {
            "document": inputString,
            "documentType": "text/plain"
        };

        var dataString = JSON.stringify(postData);

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                /**
                 * Create table with response
                 * result and headers.
                 */
                var tableHolder = document.createElement("table");
                tableHolder.style.margin = "0px auto";
                var firstRow = document.createElement("tr");
                var secondRow = document.createElement("tr");
                var thirdRow = document.createElement("tr");

                /**
                 * Add left descriptive cells
                 */
                var firstDesc = document.createElement('td');
                var secondDesc = document.createElement('td');
                var thirdDesc = document.createElement('td');

                firstDesc.innerHTML = "Response headers:";
                secondDesc.innerHTML = "Response result:";
                thirdDesc.innerHTML = "Status code:";

                firstRow.appendChild(firstDesc);
                secondRow.appendChild(secondDesc);
                thirdRow.appendChild(thirdDesc);

                var responseHeadersCell = document.createElement('td');
                var responseCell = document.createElement('td');
                var statusCell = document.createElement('td');

                responseHeadersCell.innerHTML = xhr.getAllResponseHeaders();
                /**
                 * encode < and > simbols
                 */
                responseCell.innerHTML = xhr.responseText.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                statusCell.innerHTML = xhr.status;

                firstRow.appendChild(responseHeadersCell);
                secondRow.appendChild(responseCell);
                thirdRow.appendChild(statusCell);

                tableHolder.appendChild(firstRow);
                tableHolder.appendChild(secondRow);
                tableHolder.appendChild(thirdRow);

                document.body.appendChild(tableHolder);
            }
        };

        xhr.open(method, url, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        //xhr.setRequestHeader("Content-Length", dataString.length);
        xhr.send(dataString);

        // remove listener to clean up
        window.removeEventListener("load", sendingDocumentsForProcessing);
    });
})();