/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions

    createTypes(`
        type CandidatesCsv implements Node {
            Photo: File @link(from: "Photo___NODE")
        }
    `)
}

exports.onCreateNode = async ({
    node,
    actions: { createNode },
    store,
    cache,
    createNodeId,
}) => {
    // Call createRemoteFileNode on CandidatesCsv nodes with photo URLs
    if (node.internal.type === "CandidatesCsv" && node['Photo URL'] !== null && node['Photo URL'] !== '') {
        let fileNode = await createRemoteFileNode({
            url: node['Photo URL'],
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store,
        })

        if (fileNode) {
            node.Photo___NODE = fileNode.id
        }
    }
}