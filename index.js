const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const items = {
  "release1": {
    "component1": {
      "defaults": {
        "gitOrg": "GitOrg1",
        "gitRepo": "GitRepo1_1",
        "gitLabels": [
          "release:rel1",
          "Security"
        ],
        "gitMentions": [
          "Developer1"
        ],
        "ossLayers": "1-",
        "statLayers": 1,
        "vaEnabled": true,
        "ossEnabled": true,
        "statEnabled": true,
        "vaNamespace": "release1-ns",
        "releaseName": "release1",
        "updated": "20200412-09:00:20"
      },
      "images": [
        {
          "name": "img1",
          "url": "some.docker.registry.url",
          "tag": "tag1",
          "statLayers": "1-5",
          "gitLabels": [
            "Squad-A"
          ],
          "gitAssignees": [
            "Developer2"
          ],
          "gitMentions": [
            "Developer-3"
          ]
        },
        {
          "name": "img2",
          "url": "some.docker.registry.url",
          "tag": "tag5",
          "gitLabels": [
            "Squad-B"
          ],
          "gitAssignees": [
            "Developer-2"
          ],
          "gitMentions": [
            "Developer-3"
          ]
        }
      ]
    }
  },
  "release2": {
    "component1": {
      "defaults": {
        "gitOrg": "GitOrg2",
        "gitRepo": "GitRepo2_1",
        "gitLabels": [
          "Security"
        ],
        "ossLayers": "1-",
        "statLayers": "1",
        "vaEnabled": true,
        "ossEnabled": true,
        "statEnabled": true,
        "vaNamespace": "rel2-ns",
        "releaseName": "rel2"
      },
      "images": [
        {
          "name": "img3",
          "url": "some.docker.registry.url",
          "tag": "tag5",
          "statLayers": "1-5",
          "gitLabels": [
            "Squad-G"
          ],
          "gitAssignees": [
            "Developer7"
          ],
          "gitMentions": [
            "Developer-2"
          ]
        },
      ]
    },
    "component2": {
      "defaults": {
        "gitOrg": "GitOrg7",
        "gitRepo": "GitRepo7_1",
        "gitLabels": [
          "SQUAD-J",
          "Security"
        ],
        "ossLayers": "1-",
        "statLayers": "1",
        "vaEnabled": true,
        "ossEnabled": true,
        "statEnabled": true,
        "vaNamespace": "rel2ns",
        "releaseName": "rel2"
      },
      "images": [
        {
          "name": "img72",
          "url": "docker.registry.url.xyz",
          "tag": "3.2.1"
        },
        {
          "name": "img73",
          "url": "docker.registry.url.xyz",
          "tag": "3.2.1"
        },
        {
          "name": "img76",
          "url": "docker.registry.url.xyz",
          "tag": "3.2.1"
        },
        {
          "name": "img79",
          "url": "docker.registry.url.xyz",
          "tag": "abc"
        },
        {
          "name": "img71",
          "url": "docker.registry.url.xyz",
          "tag": "3.2.1.234"
        }
      ]
    }
  }
}
app.get("/", (req, res) => {
  res.json(items);
});

app.listen(8080, () => console.log("Server is up!"));
