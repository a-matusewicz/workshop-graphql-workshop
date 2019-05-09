import gql from 'graphql-tag';


export const AddStar = gql`{
    "data": {
      "addStar": {
        "starrable": {
          "viewerHasStarred": true
        }
      }
    }
  }`;

export const RemoveStar = gql`{
    "data": {
      "removeStar": {
        "starrable": {
          "viewerHasStarred": false
        }
      }
    }
  }`;

export const GetRepos = gql`{
    "data": {
      "search": {
        "edges": [
          {
            "node": {
              "name": "Anna Matusewicz",
              "repositories": {
                "edges": [
                  {
                    "node": {
                      "name": "hello-world",
                      "id": "MDEwOlJlcG9zaXRvcnk5NTI3NDkwOQ==",
                      "viewerHasStarred": true,
                      "createdAt": "2017-06-24T04:07:31Z",
                      "description": "My first repository",
                      "url": "https://github.com/a-matusewicz/hello-world",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 2,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2017-06-24T04:29:44Z",
                                  "message": "Update README.md\n\nI expressed my feelings"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2017-06-24T04:07:32Z",
                                  "message": "Initial commit"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "DWUF",
                      "id": "MDEwOlJlcG9zaXRvcnkxMzA0MDAwNjI=",
                      "viewerHasStarred": false,
                      "createdAt": "2018-04-20T18:33:00Z",
                      "description": "Dartmouth Women's Ultimate Frisbee Website",
                      "url": "https://github.com/a-matusewicz/DWUF",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 9,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2018-04-20T18:49:47Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-20T18:43:22Z",
                                  "message": "Add files via upload"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-20T18:42:20Z",
                                  "message": "Add files via upload"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-20T18:41:23Z",
                                  "message": "Add files via upload"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-20T18:37:50Z",
                                  "message": "Add files via upload"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-20T18:37:14Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-20T18:36:36Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-20T18:33:22Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-20T18:33:00Z",
                                  "message": "Initial commit"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "robot-planning",
                      "id": "MDEwOlJlcG9zaXRvcnkxMzA1MDk5OTU=",
                      "viewerHasStarred": false,
                      "createdAt": "2018-04-21T20:33:36Z",
                      "description": "Final Project for CS 76 AI",
                      "url": "https://github.com/a-matusewicz/robot-planning",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 7,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2018-04-21T20:42:39Z",
                                  "message": "Add files via upload"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-21T20:41:02Z",
                                  "message": "Delete rrt.py"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-21T20:40:54Z",
                                  "message": "Delete test_armrobot.py"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-21T20:35:43Z",
                                  "message": "Add files via upload"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-21T20:34:27Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-21T20:34:04Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-21T20:33:37Z",
                                  "message": "Initial commit"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "sudoku-solver",
                      "id": "MDEwOlJlcG9zaXRvcnkxMzA1MTA2ODE=",
                      "viewerHasStarred": false,
                      "createdAt": "2018-04-21T20:44:14Z",
                      "description": "CS 76 AI project",
                      "url": "https://github.com/a-matusewicz/sudoku-solver",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 2,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2018-04-21T20:45:07Z",
                                  "message": "Add files via upload"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-21T20:44:15Z",
                                  "message": "Initial commit"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "annamatusewicz.me",
                      "id": "MDEwOlJlcG9zaXRvcnkxNzgwNzY4Njg=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-03-27T21:25:56Z",
                      "description": null,
                      "url": "https://github.com/a-matusewicz/annamatusewicz.me",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 10,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-07T01:35:21Z",
                                  "message": "finished readme"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-07T01:20:45Z",
                                  "message": "FINAL FUNCTIONALITY!!!"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-06T22:54:38Z",
                                  "message": "desktop page is done!"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-06T17:44:46Z",
                                  "message": "created .gitignore"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-06T17:43:10Z",
                                  "message": "Progress but still a mess"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-06T13:07:51Z",
                                  "message": "done with html layout stage"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-03-31T02:20:39Z",
                                  "message": "Very basic first draft of HTML, still has names from sunbasket"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-03-28T21:46:17Z",
                                  "message": "Added a style file and linked it to index.html"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-03-27T22:01:45Z",
                                  "message": "I added my domain name"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-03-27T21:34:28Z",
                                  "message": "my website's hello world"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "lab1-landingpage-a-matusewicz",
                      "id": "MDEwOlJlcG9zaXRvcnkxNzg2Mjg4Mzg=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-03-31T01:20:18Z",
                      "description": "lab1-landingpage-a-matusewicz created by GitHub Classroom",
                      "url": "https://github.com/dartmouth-cs52-19S/lab1-landingpage-a-matusewicz",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 1,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-07T15:09:01Z",
                                  "message": "I think I did my project in the wrong repo, I had it in a repo on my account"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "lab2-a-matusewicz",
                      "id": "MDEwOlJlcG9zaXRvcnkxNzk5ODE5OTI=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-07T15:01:51Z",
                      "description": "lab2-a-matusewicz created by GitHub Classroom",
                      "url": "https://github.com/dartmouth-cs52-19S/lab2-a-matusewicz",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 1,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-07T15:15:57Z",
                                  "message": "initial commit"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "starterpack-a-matusewicz",
                      "id": "MDEwOlJlcG9zaXRvcnkxODA2MjQ4MDg=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-10T16:49:57Z",
                      "description": "starterpack-a-matusewicz created by GitHub Classroom",
                      "url": "https://github.com/dartmouth-cs52-19S/starterpack-a-matusewicz",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 5,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-26T18:40:47Z",
                                  "message": "Done with sa6"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T01:36:28Z",
                                  "message": "v3 done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-14T16:21:06Z",
                                  "message": "Starting up:"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T02:51:53Z",
                                  "message": "All done!"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-10T20:27:36Z",
                                  "message": "we have some files in our project now"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "workshop-fancy-css-workshop",
                      "id": "MDEwOlJlcG9zaXRvcnkxODA4NTc5MjI=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-11T18:51:38Z",
                      "description": "workshop-fancy-css-workshop created by GitHub Classroom",
                      "url": "https://github.com/a-matusewicz/workshop-fancy-css-workshop",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 81,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-11T16:55:44Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T16:53:52Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T16:41:35Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T16:34:46Z",
                                  "message": "pulling readme changes\nMerge branch 'master' of https://github.com/dartmouth-cs52-19S/workshop-fancy-css-workshop"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T16:34:35Z",
                                  "message": "branched and removing complete code"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T16:32:19Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T03:48:23Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T03:45:49Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T03:39:52Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T03:37:55Z",
                                  "message": "minor fixes"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "sa4-a-matusewicz",
                      "id": "MDEwOlJlcG9zaXRvcnkxODEzMzM1Mzk=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-14T15:58:55Z",
                      "description": "sa4-a-matusewicz created by GitHub Classroom",
                      "url": "https://github.com/dartmouth-cs52-19S/sa4-a-matusewicz",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 6,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-15T02:52:19Z",
                                  "message": "I added css stylings"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-15T01:29:42Z",
                                  "message": "Changed deployment name"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-15T01:28:29Z",
                                  "message": "All done with basic assignment"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-14T16:21:06Z",
                                  "message": "Starting up:"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T02:51:53Z",
                                  "message": "All done!"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-10T20:27:36Z",
                                  "message": "we have some files in our project now"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "workshop-ws-04-16-static-gen",
                      "id": "MDEwOlJlcG9zaXRvcnkxODE3NDcyNDQ=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-16T18:43:34Z",
                      "description": "workshop-ws-04-16-static-gen created by GitHub Classroom",
                      "url": "https://github.com/a-matusewicz/workshop-ws-04-16-static-gen",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 92,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-16T18:22:18Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-16T15:16:40Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-16T14:42:55Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-16T14:41:28Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-16T14:38:39Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-16T14:29:02Z",
                                  "message": "removed completed_code"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-16T01:54:17Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-16T01:40:40Z",
                                  "message": "Add files via upload"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-16T01:35:13Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-16T01:20:58Z",
                                  "message": "Update README.md"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "lab3-a-matusewicz",
                      "id": "MDEwOlJlcG9zaXRvcnkxODE4MDkzMTg=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-17T03:19:07Z",
                      "description": "lab3-a-matusewicz created by GitHub Classroom",
                      "url": "https://github.com/dartmouth-cs52-19S/lab3-a-matusewicz",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 9,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-23T15:32:09Z",
                                  "message": "Deployed"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T15:21:09Z",
                                  "message": "Readme formatting"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T15:18:02Z",
                                  "message": "Done with 1 EC"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T14:04:20Z",
                                  "message": "All done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T04:42:52Z",
                                  "message": "Everything working except delete"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-22T22:14:53Z",
                                  "message": "Part 1 done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-14T16:21:06Z",
                                  "message": "Starting up:"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-11T02:51:53Z",
                                  "message": "All done!"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-10T20:27:36Z",
                                  "message": "we have some files in our project now"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "workshop-css-in-js-workshop",
                      "id": "MDEwOlJlcG9zaXRvcnkxODE5NjYxNjY=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-17T20:49:44Z",
                      "description": "workshop-css-in-js-workshop created by GitHub Classroom",
                      "url": "https://github.com/a-matusewicz/workshop-css-in-js-workshop",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 47,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-17T21:25:04Z",
                                  "message": "I tried to make it pretty and failed"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-17T21:08:07Z",
                                  "message": "Done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-17T18:47:17Z",
                                  "message": "Update youtube-api.js"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-17T15:43:04Z",
                                  "message": "Update README.md, clarified a few things"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-17T13:40:05Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-17T13:26:21Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-17T13:00:35Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-17T12:57:29Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-17T12:50:51Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-17T12:47:34Z",
                                  "message": "Update README.md"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "workshop-ws-04-18-js-graphics",
                      "id": "MDEwOlJlcG9zaXRvcnkxODIxNDA3MDM=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-18T18:48:21Z",
                      "description": "workshop-ws-04-18-js-graphics created by GitHub Classroom",
                      "url": "https://github.com/a-matusewicz/workshop-ws-04-18-js-graphics",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 91,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-18T19:29:08Z",
                                  "message": "All done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-18T16:25:05Z",
                                  "message": "forgot to categorize as extra credit on last commit"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-18T16:23:19Z",
                                  "message": "one more readme edit"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-18T16:12:28Z",
                                  "message": "one readme change"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-18T14:42:13Z",
                                  "message": "readme tiny edit"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-18T14:37:55Z",
                                  "message": "Merge branch 'master' of https://github.com/dartmouth-cs52-19S/workshop-ws-04-18-js-graphics"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-18T14:37:51Z",
                                  "message": "fixing edits craig said"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-18T04:11:32Z",
                                  "message": "Edits to scroll section and added citation"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-18T03:10:06Z",
                                  "message": "Merge branch 'master' of https://github.com/dartmouth-cs52-19S/workshop-ws-04-18-js-graphics"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-18T03:09:56Z",
                                  "message": "README fixes part1"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "workshop-ws-04-23-maps",
                      "id": "MDEwOlJlcG9zaXRvcnkxODMwNzU1Njk=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-23T18:40:17Z",
                      "description": "workshop-ws-04-23-maps created by GitHub Classroom",
                      "url": "https://github.com/a-matusewicz/workshop-ws-04-23-maps",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 54,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-23T17:35:38Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T16:57:01Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T16:51:20Z",
                                  "message": "updated readme"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T16:29:21Z",
                                  "message": "Merge branch 'master' of github.com:dartmouth-cs52-19S/workshop-ws-04-23-maps"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T16:29:14Z",
                                  "message": "updated"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T16:15:46Z",
                                  "message": "Merge branch 'master' of https://github.com/dartmouth-cs52-19S/workshop-ws-04-23-maps"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-23T16:15:28Z",
                                  "message": "adding sources"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-22T19:42:44Z",
                                  "message": "readme updates"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-22T19:39:42Z",
                                  "message": "Merge branch 'master' of github.com:dartmouth-cs52-19S/workshop-ws-04-23-maps"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-22T19:34:47Z",
                                  "message": "extra credit hint"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "workshop-ws-04-24-chrome-extension",
                      "id": "MDEwOlJlcG9zaXRvcnkxODMzMDQ3Mjk=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-24T20:49:26Z",
                      "description": "workshop-ws-04-24-chrome-extension created by GitHub Classroom",
                      "url": "https://github.com/a-matusewicz/workshop-ws-04-24-chrome-extension",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 63,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-24T21:23:34Z",
                                  "message": "done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-24T19:15:21Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-24T19:06:04Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-24T19:04:47Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-24T19:02:08Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-24T19:01:06Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-24T18:57:39Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-24T18:56:18Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-24T18:46:31Z",
                                  "message": "Update README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-24T16:34:50Z",
                                  "message": "img"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "workshop-ws-04-25-react-comps",
                      "id": "MDEwOlJlcG9zaXRvcnkxODM0OTExMTE=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-25T18:43:18Z",
                      "description": "workshop-ws-04-25-react-comps created by GitHub Classroom",
                      "url": "https://github.com/a-matusewicz/workshop-ws-04-25-react-comps",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 75,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-25T19:11:59Z",
                                  "message": "Done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T17:37:10Z",
                                  "message": "stripped\n\nmore stripping\n\nminor fixes\n\nfixed other_assignment\n\nadded classes to render\n\nsmall fix\n\nfixes\n\ni hate this\n\nalmost done\n\nupdated alert dialog\n\nreadme\n\nUpdate README.md\n\nUpdate README.md\n\nUpdate README.md\n\nUpdate README.md\n\nadded some todo comments"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T06:43:39Z",
                                  "message": "stripped"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T06:25:45Z",
                                  "message": "stripped em clean"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T05:48:04Z",
                                  "message": "making dummy classes"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T05:37:18Z",
                                  "message": "stripped nav bar"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T05:28:55Z",
                                  "message": "cleaned out components for workshop"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T03:35:42Z",
                                  "message": "Merge branch 'master' of https://github.com/dartmouth-cs52-19S/workshop-ws-04-25-react-comps"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T03:30:26Z",
                                  "message": "fixed merge conflict"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-25T03:29:22Z",
                                  "message": "styling"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "lab4-a-matusewicz",
                      "id": "MDEwOlJlcG9zaXRvcnkxODM2Nzg1MDU=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-26T18:44:40Z",
                      "description": "lab4-a-matusewicz created by GitHub Classroom",
                      "url": "https://github.com/dartmouth-cs52-19S/lab4-a-matusewicz",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 14,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-05-08T00:24:36Z",
                                  "message": "left in an error"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-05-08T00:19:42Z",
                                  "message": "Updated a lot of styling and added more bootstrap"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-05-07T01:10:38Z",
                                  "message": "Fixed tags and search bar"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-05-06T18:50:49Z",
                                  "message": "Done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-05-01T00:00:16Z",
                                  "message": "Now I'm all done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T15:38:16Z",
                                  "message": "error handling is now implemented"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T06:20:28Z",
                                  "message": "MVP"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T06:04:36Z",
                                  "message": "Everything works except the content field for creating a new post"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-29T01:41:41Z",
                                  "message": "Creating and displaying all works, working on displaying and editing the one"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-26T18:40:47Z",
                                  "message": "Done with sa6"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "workshop-ws-04-30-cool-apis",
                      "id": "MDEwOlJlcG9zaXRvcnkxODQzMTQ0NTg=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-04-30T18:46:45Z",
                      "description": "workshop-ws-04-30-cool-apis created by GitHub Classroom",
                      "url": "https://github.com/a-matusewicz/workshop-ws-04-30-cool-apis",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 24,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-04-30T19:38:48Z",
                                  "message": "All done, I committed out the API key"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T03:59:11Z",
                                  "message": "finished readme"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T03:34:24Z",
                                  "message": "updated readme"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T00:24:07Z",
                                  "message": "updated readme"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-29T23:50:27Z",
                                  "message": "updated readme"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-29T23:10:41Z",
                                  "message": "added windows package change"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-29T18:52:11Z",
                                  "message": "added Setup in README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-29T18:49:45Z",
                                  "message": "added Setup in README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-29T18:48:35Z",
                                  "message": "added Setup in README.md"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-29T18:46:22Z",
                                  "message": "added Setup in README.md"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "node": {
                      "name": "sa7-a-matusewicz",
                      "id": "MDEwOlJlcG9zaXRvcnkxODQ0Nzc4MTQ=",
                      "viewerHasStarred": false,
                      "createdAt": "2019-05-01T20:32:32Z",
                      "description": "sa7-a-matusewicz created by GitHub Classroom",
                      "url": "https://github.com/dartmouth-cs52-19S/sa7-a-matusewicz",
                      "defaultBranchRef": {
                        "target": {
                          "history": {
                            "totalCount": 29,
                            "edges": [
                              {
                                "node": {
                                  "committedDate": "2019-05-02T17:12:09Z",
                                  "message": "Done"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T21:44:59Z",
                                  "message": "node up"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T04:26:34Z",
                                  "message": "updating for 19s"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T04:20:01Z",
                                  "message": "up"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2019-04-30T04:14:38Z",
                                  "message": "updates"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-05-02T02:46:58Z",
                                  "message": "allowing node 10"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-05-01T21:44:15Z",
                                  "message": "bugfix"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-05-01T14:05:27Z",
                                  "message": "Merge branch 'master' of github.com:dartmouth-cs52/express-babel-starter"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-05-01T14:05:10Z",
                                  "message": "refactor app->src"
                                }
                              },
                              {
                                "node": {
                                  "committedDate": "2018-04-30T13:47:10Z",
                                  "message": "Update .eslintrc"
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }`;
