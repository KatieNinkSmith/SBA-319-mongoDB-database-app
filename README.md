# SBA-319-mongoDB-database-app

postman DELETE http://localhost:5052/api/trees/:id

You will create a small Node, Express, and MongoDB server application. The topic and content of this application is entirely up to you; be creative!
Your work will be graded according to the technical requirements listed in the following section. Creativity and effort always work in your favor, so feel free to go beyond the scope of the listed requirements if you have the time.
Keep things simple. Like most projects you will encounter, you should finish the absolute minimum requirements first, and then add additional features and complexity if you have the time to do so. This will also help you understand what you can get done in a specific allotment of time if you were to be asked to do something similar in the future.
Once you have an idea in mind, briefly discuss it with your instructors to determine if it is appropriate for the amount of time you have been given.

Requirements
The requirements listed here are absolute minimums. Ensure that your application meets these requirements before attempting to further expand your features.
Create your application locally, and initialize a local git repo. Make frequent commits to the repo. When your application is complete, push your repo to GitHub and submit the link to the GitHub page using the submission instructions at the top of this document.

**Use at least three different data collections within the database (such as users, posts, or comments).
**Utilize reasonable data modeling practices.
**Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.
**Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.
**Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.
Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.
Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.
**Include sensible MongoDB data validation rules for at least one data collection.
Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error.
**Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.
Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents).
**Utilize reasonable code organization practices.
Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
Commit frequently to the git repository.
Include a README file that contains a description of your application.
This README must include a description of your API's available routes and their corresponding CRUD operations for reference.
Level of effort displayed in creativity and user experience.

Bonus Objectives
The objectives listed here are not required. Ensure that your application meets the requirements above before attempting to further expand your features.
These bonus objectives cannot increase your overall score above 100%. Successful completion of these objectives can; however, make up for lost points above. Ensure your application works as outlined by the requirements above before attempting these objectives, time permitting.

Use Mongoose to implement your application.
Note: The validation requirements above must still be implemented database-side, but should also be implemented application-side within your Mongoose schema(s).

// from hema to make it so not every value is needed
router.post('/', async (req, res) => {
// Destructure the specific properties from req.body
const { title, company, location, description } = req.body;

try {
// Create the job with the specified properties
const newJob = await Job.create({ title, company, location, description });

    // Redirect to '/jobs' after successful creation
    res.redirect('/jobs');
    console.log(res.status);

} catch (error) {
console.log(res.status);
res.status(400).json({ message: error.message });
}
});

// from Adam
// DELETE: Delete a task by ID
app.delete("/tasks/:id", async (req, res) => {
console.log("DELETE /tasks/:id called with ID:", req.params.id); // Log route call

    const { id } = req.params; // Extract task ID from request parameters
    try {
        // Filter out the task with the given ID in Mongoose DB
        const deletedTask = await Task.findByIdAndDelete(id);

        if (deletedTask) {
            console.log(`Task with ID ${id} deleted.`); // Log success
            res.redirect("/"); // Redirect to the homepage after deletion
        } else {
            console.log(`Task with ID ${id} not found.`); // Log failure
            res.status(404).send("Task not found");
        }
    } catch (error) {
        console.error(`Error deleting task: ${error.message}`);
        res.status(500).send("An error occurred while deleting the task.");
    }

});

things that didnt work
// trying to figure out how to render a list of all trees on the page
function async disTrees() {
await tree.create({})
}

decided not to use
// only need a put or a patch
// // UPDATE a tree
// // localhost:5052/api/trees/:id/edit NEED TO TEST IN POSTMAN
// router.put("/:id/edit", async (req, res) => {
// try {
// const updatedTree = await Tree.findByIdAndUpdate(req.body.\_id, req.body, {
// new: true,
// });
// console.log(updatedTree);
// res.redirect(`/trees/${req.params.id}`).status(200);
// } catch (err) {
// res.status(400).send(err);
// }
// });
//-------USED TO SEED NOW COMMENTED OUT-----

// Database is seeded
// router.get("/seed", async (req, res) => {
// try {
// await Tree.create([
// {
// name: "Lemon (Meyer)",
// purpose: "Fruiting",
// height: 10,
// diameter: 10,
// ageOfTree: 15,
// leaves: "Coniferous",
// waterRequirements: "Weekly Deep Watering",
// fertilizer: "Biannual",
// datePlanted: "2024-12-10T04:24:48.285Z",
// },
// {
// name: "Pomogranate (Wonderful)",
// purpose: "Fruiting",
// height: 8,
// diameter: 6,
// ageOfTree: 2,
// leaves: "Deciduous",
// waterRequirements: "Occasinal, Drought Tollerent",
// fertilizer: "none",
// datePlanted: "2024-12-10T04:24:48.285Z",
// },
// {
// name: "Pomogranate (Eversweet)",
// purpose: "Fruiting",
// height: 8,
// diameter: 6,
// ageOfTree: 2,
// leaves: "Deciduous",
// waterRequirements: "Occasinal, Drought Tollerent",
// fertilizer: "none",
// datePlanted: "2024-12-10T04:24:48.285Z",
// },
// {
// name: "Chinese Elm",
// purpose: "Canopy",
// height: 15,
// diameter: 18,
// ageOfTree: 15,
// leaves: "Deciduous",
// waterRequirements: "Weekly Deep Watering",
// fertilizer: "none",
// datePlanted: "2024-12-10T04:24:48.285Z",
// },
// {
// name: "Desert Willow",
// purpose: "Canopy",
// height: 20,
// diameter: 10,
// ageOfTree: 4,
// leaves: "Coniferous",
// waterRequirements: "None Drought Tollerent",
// fertilizer: "none",
// datePlanted: "2024-12-10T04:24:48.285Z",
// },
// ]);
// } catch (err) {
// res.status(400).send(err);
// }
// });
