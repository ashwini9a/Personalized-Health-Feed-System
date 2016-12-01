(function () {
    window.addEventListener("load", function sendingDocumentsForProcessing() {
    
        var username = "s42q9631q8qu";
        var password = "tl85983onqhe4v3";
        var url = "https://text.s4.ontotext.com/v1/twitie";
        var method = "POST";

        var inputString = "<Children who suffer from asthma and type 1 diabetes or type 2 diabetes may be more likely to have poorly regulated blood sugar levels, according to a new study. Researchers reported in the journal Pediatrics that the presence of both conditions in one patient is relatively common. The findings suggest that these individuals may have to take extra steps to manage their glucose levels. For the study, researchers from Kaiser Permanente of Southern California traced the medical records of 1,683 children with type 1 diabetes and 311 adolescents with type 2 diabetes. The results showed that 11 percent of the participants, regardless of the type of diabetes they had, also had asthma. You may be interested in these related articles: New Type 2 Diabetes Treatment Safety of Type 2 Diabetes Medications Researchers identify molecular pathway that may become target of type 1 diabetes and type 2 diabetes medications Medical costs are higher for children with type 1 diabetes or type 2 diabetes than healthy youths While the presence of asthma of complicated glucose control in both types of diabetics, the results showed that individuals with type 1 diabetes had a particularly difficult time managing their blood sugar levels. The researchers said their study was not able to determine why the prevalence of asthma would be higher among children with diabetes, or why blood sugar control would be worse among diabetics who had asthma. However, they suspected the answer may lie in inflammation. Asthma is known to cause inflammation in the pulmonary system. Previous studies have suggested that individuals with more inflammation throughout their body tend to have higher blood sugar levels. Furthermore, the team pointed out that there is a complex relationship between the pulmonary system, body mass index and glycemic control in youths. A disruption in one part of this system may lead to significant problems. They suggested that further research be conducted to determine why the prevalence of asthma is higher among children with type 1 diabetes or type 2 diabetes. Determining the cause of this connection may also help explain why diabetics who also have asthma have poor blood sugar control.   Last updated on 09\/26\/2011 You May Also Like: Type 2 Diabetes in Adults: When to Prescribe Insulin Diabetes Lifestyle Tips: Foot Care Tips Introduction to Type 1 and Type 2 Diabetes Depression in Type 1 and Type 2 Diabetes Anaplastic Thyroid Cancer Diabetes Follicular Thyroid Cancer Hypothyroidism Medullary Thyroid Cancer Menopause Obesity Osteoporosis Papillary Thyroid Cancer Thyroid Cancer Thyroid Diseases Type 1 Diabetes Type 2 Diabetes Send me updates for the following endocrine topics to my inbox. Diabetes Prevention Hyperglycemia Hypoglycemia Obesity EndocrineWeb Ask questions. Share your opinions. Get advice. Join Now>";
 
        var postData = {
           "document": inputString,
           "documentType": "text/plain"
        };
 
        var dataString = JSON.stringify(postData);

        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.withCredentials = true;
        xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));


        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");


 //       xhr.setRequestHeader("Content-Length", dataString.length);
        xhr.send(dataString);

    window.removeEventListener("load", sendingDocumentsForProcessing);
    });
})();