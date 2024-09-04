import mongoose from 'mongoose'
import { dataSchema } from '../models/data.model.js'

const dataModel = new mongoose.model("data", dataSchema);

export const getAllData = async (req, res) => {
    const data = await dataModel.find({});
    res.send(data)
}

export const countLikelihood = async (req, res) => {
    try {
        const data = await dataModel.find({});
        const likelihoodCounts = {};
        for (let i = 0; i < data.length; i++) {
            const likelihood = data[i].likelihood?.toString();
            if (likelihood !== null && likelihood !== undefined && likelihood in likelihoodCounts) {
                likelihoodCounts[likelihood]++;
            } else if (likelihood !== null && likelihood !== undefined && likelihood !== "") {
                likelihoodCounts[likelihood] = 1;
            }
        }
        res.send(likelihoodCounts);
    } catch (error) {
        console.log(error)
    }
}

export const countRelevance = async (req, res) => {
    try {
        const data = await dataModel.find({});
        const relevanceCounts = {};
        for (let i = 0; i < data.length; i++) {
            const relevance = data[i].relevance?.toString();
            if (relevance !== null && relevance !== undefined && relevance in relevanceCounts) {
                relevanceCounts[relevance]++;
            } else if (relevance !== null && relevance !== undefined && relevance !== "") {
                relevanceCounts[relevance] = 1;
            }
        }
        res.send(relevanceCounts);
    } catch (error) {
        console.log(error)
    }
}

export const countIntensity = async (req, res) => {
    try {
        const data = await dataModel.find({});
        const intensityCounts = {};

        for (let i = 0; i < data.length; i++) {
            const intensity = data[i].intensity?.toString();
            if (intensity !== null && intensity !== undefined && intensity in intensityCounts) {
                intensityCounts[intensity]++;
            } else if (intensity !== null && intensity !== undefined && intensity !== "") {
                intensityCounts[intensity] = 1;
            }
        }
        res.send(intensityCounts);
    } catch (error) {
        console.log(error)
    }
}

export const countPublished = async (req, res) => {
    try {
        const data = await dataModel.find({});
        const publishedCounts = {};

        for (let i = 0; i < data.length; i++) {
            const publishedDate = new Date(data[i].published !== "" && data[i].published);
            const year = publishedDate.getFullYear().toString();
            if (year in publishedCounts) {
                publishedCounts[year]++;
            } else {
                publishedCounts[year] = 1;
            }
        }
        console.log(publishedCounts);
        res.send(publishedCounts);
    } catch (error) {
        console.log(error)
    }
}



export const countCountry = async (req, res) => {
    try {
        const data = await dataModel.find({});
        const countryCounts = {};

        for (let i = 0; i < data.length; i++) {
            const country = data[i].country?.toString();
            if (country !== null && country !== undefined && country in countryCounts) {
                countryCounts[country]++;
            } else if (country !== null && country !== undefined && country !== "") {
                countryCounts[country] = 1;
            }
        }
       
        res.send(countryCounts);
    } catch (error) {
        console.log(error)
    }
}






export const countTopic = async (req, res) => {
    try {
        const data = await dataModel.find({});
        const topicCounts = {};

        for (let i = 0; i < data.length; i++) {
            const topic = data[i].topic?.toString();
            if (topic !== null && topic !== undefined && topic in topicCounts) {
                topicCounts[topic]++;
            } else if (topic !== null && topic !== undefined && topic !== "") {
                topicCounts[topic] = 1;
            }
        }
        res.send(topicCounts);
    } catch (error) {
        console.log(error)
    }
}



export const countRegion = async (req, res) => {
    try {
        const data = await dataModel.find({});
        const regionCounts = {};

        for (let i = 0; i < data.length; i++) {
            const region = data[i].region?.toString();
            if (region !== null && region !== undefined && region in regionCounts) {
                regionCounts[region]++;
            } else if (region !== null && region !== undefined && region !== "") {
                regionCounts[region] = 1;
            }
        }
        res.send(regionCounts);
    } catch (error) {
        console.log(error)
    }
}



