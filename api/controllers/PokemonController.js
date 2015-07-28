var Machine = require("machine");
module.exports = {
    'create': function(req, res) {
        Machine.build({
            inputs: {
                "pokemonId": {
                    "example": "/pets/18"
                }
            },
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // Send HTTP request
                sails.machines['459ab538-3c6a-4a0d-ad61-895bd6097c06_2.3.0'].sendHttpRequest({
                    "url": "/pokemon/" + inputs.pokemonId,
                    "baseUrl": "http://pokeapi.co/api/v1",
                    "method": "GET"
                }).exec({
                    "error": function(sendHTTPRequest) {
                        return exits.error({
                            data: sendHTTPRequest,
                            status: 500
                        });

                    },
                    "notFound": function(sendHTTPRequest) {
                        return exits.error({
                            data: sendHTTPRequest,
                            status: 500
                        });

                    },
                    "badRequest": function(sendHTTPRequest) {
                        return exits.error({
                            data: sendHTTPRequest,
                            status: 500
                        });

                    },
                    "forbidden": function(sendHTTPRequest) {
                        return exits.error({
                            data: sendHTTPRequest,
                            status: 500
                        });

                    },
                    "unauthorized": function(sendHTTPRequest) {
                        return exits.error({
                            data: sendHTTPRequest,
                            status: 500
                        });

                    },
                    "serverError": function(sendHTTPRequest) {
                        return exits.error({
                            data: sendHTTPRequest,
                            status: 500
                        });

                    },
                    "requestFailed": function(sendHTTPRequest) {
                        return exits.error({
                            data: sendHTTPRequest,
                            status: 500
                        });

                    },
                    "success": function(sendHTTPRequest) {
                        // Parse GET/pokemon/id
                        sails.machines['28cce2cd-1991-493d-8a0d-1532d85db9a8_1.2.0'].parse({
                            "json": (sendHTTPRequest && sendHTTPRequest.body),
                            "schema": {
                                name: "Butterfree",
                                types: [{
                                    name: "flying"
                                }],
                                moves: [{
                                    learn_type: "level up",
                                    name: "Rage-powder",
                                    level: 3
                                }],
                                sprites: [{
                                    resource_uri: "/api/v1/sprites/13/"
                                }],
                                descriptions: [{
                                    resource_uri: "/api/v1/descriptions/176/"
                                }]
                            }
                        }).exec({
                            "error": function(parseGETPokemonId) {
                                return exits.error({
                                    data: parseGETPokemonId,
                                    status: 500
                                });

                            },
                            "couldNotParse": function(parseGETPokemonId) {
                                return exits.error({
                                    data: parseGETPokemonId,
                                    status: 500
                                });

                            },
                            "success": function(parseGETPokemonId) {
                                // Pluck Type
                                sails.machines['c646f5e7-9c6f-49a5-91f6-7e1eabfd1186_4.2.0'].pluck({
                                    "array": (parseGETPokemonId && parseGETPokemonId.types),
                                    "key": "nam"
                                }).exec({
                                    "error": function(pluckType) {
                                        return exits.error({
                                            data: pluckType,
                                            status: 500
                                        });

                                    },
                                    "success": function(pluckType) {
                                        // Sort Moves
                                        sails.machines['c646f5e7-9c6f-49a5-91f6-7e1eabfd1186_4.2.0'].sortBy({
                                            "array": (parseGETPokemonId && parseGETPokemonId.moves),
                                            "key": "level"
                                        }).exec({
                                            "error": function(sortMoves) {
                                                return exits.error({
                                                    data: sortMoves,
                                                    status: 500
                                                });

                                            },
                                            "success": function(sortMoves) {
                                                // Grab first sprite (get (n)th item)
                                                sails.machines['c646f5e7-9c6f-49a5-91f6-7e1eabfd1186_4.2.0'].nth({
                                                    "array": (parseGETPokemonId && parseGETPokemonId.sprites),
                                                    "index": 0
                                                }).exec({
                                                    "error": function(grabFirstSpriteGetNThItem) {
                                                        return exits.error({
                                                            data: grabFirstSpriteGetNThItem,
                                                            status: 500
                                                        });

                                                    },
                                                    "notFound": function(grabFirstSpriteGetNThItem) {
                                                        return exits.error({
                                                            data: grabFirstSpriteGetNThItem,
                                                            status: 500
                                                        });

                                                    },
                                                    "success": function(grabFirstSpriteGetNThItem) {
                                                        // GET/ Sprite image
                                                        sails.machines['459ab538-3c6a-4a0d-ad61-895bd6097c06_2.3.0'].sendHttpRequest({
                                                            "url": (grabFirstSpriteGetNThItem && grabFirstSpriteGetNThItem.resource_uri),
                                                            "baseUrl": "http://pokeapi.co/"
                                                        }).exec({
                                                            "error": function(getSpriteImage) {
                                                                return exits.error({
                                                                    data: getSpriteImage,
                                                                    status: 500
                                                                });

                                                            },
                                                            "notFound": function(getSpriteImage) {
                                                                return exits.error({
                                                                    data: getSpriteImage,
                                                                    status: 500
                                                                });

                                                            },
                                                            "badRequest": function(getSpriteImage) {
                                                                return exits.error({
                                                                    data: getSpriteImage,
                                                                    status: 500
                                                                });

                                                            },
                                                            "forbidden": function(getSpriteImage) {
                                                                return exits.error({
                                                                    data: getSpriteImage,
                                                                    status: 500
                                                                });

                                                            },
                                                            "unauthorized": function(getSpriteImage) {
                                                                return exits.error({
                                                                    data: getSpriteImage,
                                                                    status: 500
                                                                });

                                                            },
                                                            "serverError": function(getSpriteImage) {
                                                                return exits.error({
                                                                    data: getSpriteImage,
                                                                    status: 500
                                                                });

                                                            },
                                                            "requestFailed": function(getSpriteImage) {
                                                                return exits.error({
                                                                    data: getSpriteImage,
                                                                    status: 500
                                                                });

                                                            },
                                                            "success": function(getSpriteImage) {
                                                                // Parse Get sprite ID
                                                                sails.machines['28cce2cd-1991-493d-8a0d-1532d85db9a8_1.2.0'].parse({
                                                                    "json": (getSpriteImage && getSpriteImage.body),
                                                                    "schema": {
                                                                        image: "this is the imag"
                                                                    }
                                                                }).exec({
                                                                    "error": function(parseGetSpriteID) {
                                                                        return exits.error({
                                                                            data: parseGetSpriteID,
                                                                            status: 500
                                                                        });

                                                                    },
                                                                    "couldNotParse": function(parseGetSpriteID) {
                                                                        return exits.error({
                                                                            data: parseGetSpriteID,
                                                                            status: 500
                                                                        });

                                                                    },
                                                                    "success": function(parseGetSpriteID) {
                                                                        // Grab first Description
                                                                        sails.machines['c646f5e7-9c6f-49a5-91f6-7e1eabfd1186_4.2.0'].nth({
                                                                            "array": (parseGETPokemonId && parseGETPokemonId.descriptions),
                                                                            "index": 0
                                                                        }).exec({
                                                                            "error": function(grabFirstDescription) {
                                                                                return exits.error({
                                                                                    data: grabFirstDescription,
                                                                                    status: 500
                                                                                });

                                                                            },
                                                                            "notFound": function(grabFirstDescription) {
                                                                                return exits.error({
                                                                                    data: grabFirstDescription,
                                                                                    status: 500
                                                                                });

                                                                            },
                                                                            "success": function(grabFirstDescription) {
                                                                                // Get/Descripton
                                                                                sails.machines['459ab538-3c6a-4a0d-ad61-895bd6097c06_2.3.0'].sendHttpRequest({
                                                                                    "url": (grabFirstDescription && grabFirstDescription.resource_uri),
                                                                                    "baseUrl": "http://pokeapi.co"
                                                                                }).exec({
                                                                                    "error": function(getDescripton) {
                                                                                        return exits.error({
                                                                                            data: getDescripton,
                                                                                            status: 500
                                                                                        });

                                                                                    },
                                                                                    "notFound": function(getDescripton) {
                                                                                        return exits.error({
                                                                                            data: getDescripton,
                                                                                            status: 500
                                                                                        });

                                                                                    },
                                                                                    "badRequest": function(getDescripton) {
                                                                                        return exits.error({
                                                                                            data: getDescripton,
                                                                                            status: 500
                                                                                        });

                                                                                    },
                                                                                    "forbidden": function(getDescripton) {
                                                                                        return exits.error({
                                                                                            data: getDescripton,
                                                                                            status: 500
                                                                                        });

                                                                                    },
                                                                                    "unauthorized": function(getDescripton) {
                                                                                        return exits.error({
                                                                                            data: getDescripton,
                                                                                            status: 500
                                                                                        });

                                                                                    },
                                                                                    "serverError": function(getDescripton) {
                                                                                        return exits.error({
                                                                                            data: getDescripton,
                                                                                            status: 500
                                                                                        });

                                                                                    },
                                                                                    "requestFailed": function(getDescripton) {
                                                                                        return exits.error({
                                                                                            data: getDescripton,
                                                                                            status: 500
                                                                                        });

                                                                                    },
                                                                                    "success": function(getDescripton) {
                                                                                        // Parse Get Description
                                                                                        sails.machines['28cce2cd-1991-493d-8a0d-1532d85db9a8_1.2.0'].parse({
                                                                                            "json": (getDescripton && getDescripton.body),
                                                                                            "schema": {
                                                                                                description: "This is a description"
                                                                                            }
                                                                                        }).exec({
                                                                                            "error": function(parseGetDescription) {
                                                                                                return exits.error({
                                                                                                    data: parseGetDescription,
                                                                                                    status: 500
                                                                                                });

                                                                                            },
                                                                                            "couldNotParse": function(parseGetDescription) {
                                                                                                return exits.error({
                                                                                                    data: parseGetDescription,
                                                                                                    status: 500
                                                                                                });

                                                                                            },
                                                                                            "success": function(parseGetDescription) {
                                                                                                // Construct dictionary
                                                                                                sails.machines['1ce3619d-97b1-4aec-a3e9-884c7ed24556_2.2.0'].construct({
                                                                                                    "dictionary": {
                                                                                                        pokemonName: (parseGETPokemonId && parseGETPokemonId.name),
                                                                                                        types: pluckType,
                                                                                                        moves: sortMoves,
                                                                                                        imageUrl: "http://pokeapi.co" + (parseGetSpriteID && parseGetSpriteID.image),
                                                                                                        description: (parseGetDescription && parseGetDescription.description)
                                                                                                    }
                                                                                                }).exec({
                                                                                                    "error": function(constructDictionary) {
                                                                                                        return exits.error({
                                                                                                            data: constructDictionary,
                                                                                                            status: 500
                                                                                                        });

                                                                                                    },
                                                                                                    "success": function(constructDictionary) {
                                                                                                        return exits.respond({
                                                                                                            data: constructDictionary,
                                                                                                            action: "respond_with_result_and_status",
                                                                                                            status: 200
                                                                                                        });

                                                                                                    }
                                                                                                });

                                                                                            }
                                                                                        });

                                                                                    }
                                                                                });

                                                                            }
                                                                        });

                                                                    }
                                                                });

                                                            }
                                                        });

                                                    }
                                                });

                                            }
                                        });

                                    }
                                });

                            }
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};