export default {
    ["final-newline"]: true,
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeDoctype: true,
                    removeXMLProcInst: true,
                    removeComments: true,
                    removeMetadata: true,
                    removeEditorsNSData: true,
                    cleanupAttrs: true,
                    mergeStyles: true,
                    inlineStyles: true,
                    minifyStyles: true,
                    cleanupIds: true,
                    removeUselessDefs: true,
                    cleanupNumericValues: false,
                    convertColors: false,
                    removeUnknownsAndDefaults: false,
                    removeNonInheritableGroupAttrs: true,
                    removeUselessStrokeAndFill: true,
                    removeViewBox: false,
                    cleanupEnableBackground: false,
                    removeHiddenElems: true,
                    removeEmptyText: true,
                    convertShapeToPath: false,
                    convertEllipseToCircle: false,
                    moveElemsAttrsToGroup: false,
                    moveGroupAttrsToElems: false,
                    collapseGroups: false,
                    convertPathData: false,
                    convertTransform: false,
                    removeEmptyAttrs: true,
                    removeEmptyContainers: true,
                    removeUnusedNS: true,
                    mergePaths: false,
                    sortAttrs: true,
                    sortDefsChildren: true,
                    removeTitle: true,
                    removeDesc: true,
                },
            },
        },
    ],
};