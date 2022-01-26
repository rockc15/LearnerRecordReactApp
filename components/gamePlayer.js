
let GamePlayer = class {
    constructor(id, name, learnerRecord, quentions) {
        this._questionIndex = 0
        this._totalPoint = 450
        this._id = id
        this._name = name
        this._learnerRecord = learnerRecord
        this._questions = quentions
    }

    ////////////
    // Getters
    ///////////
    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get learnerRecord() {
        return this._learnerRecord
    }

    get questionIndex() {
        return this._questionIndex
    }

    get questions() {
        return this._questions
    }

    get totalPoint() {
        return this._totalPoint
    }

    getQuestionSetByID(levelId) {
        return this._questions[levelId]
    }

    //////////////
    // "Setter"
    /////////////
    updateLocalLearnerRecord(literal, standardLearnedContent, correct) {
        let learnerRecord = this._learnerRecord
        if (Object.keys(learnerRecord).length == 0 || learnerRecord[standardLearnedContent] == undefined) {
            if (correct) {
                Object.assign(learnerRecord,
                    {
                        [standardLearnedContent]: {
                            "countsCorrect": 1,
                            "literal": literal,
                            "totalCounts": 1,
                        }
                    })
            } else {
                Object.assign(learnerRecord,
                    {
                        [standardLearnedContent]: {
                            "countsCorrect": 0,
                            "literal": literal,
                            "totalCounts": 1,
                        }
                    })
            }

        } else {
            let indexedContent = learnerRecord[standardLearnedContent]
            if (correct) {
                indexedContent.countsCorrect = indexedContent.countsCorrect + 1
            }
            indexedContent.totalCounts = indexedContent.totalCounts + 1
        }

    }

    updateTotalPoints(addedPoints, levelCorrectPoints) {
        if (levelCorrectPoints == 0) {
            if (addedPoints >= 5) {
                this._totalPoint += 3
            } else if (addedPoints == 4 || addedPoints == 3) {
                this._totalPoint += 2
            } else if (addedPoints == 2 || addedPoints == 1) {
                this._totalPoint += 1
            } else {
                this._totalPoint += 0
            }
        } else if (levelCorrectPoints == 1) {
            if (addedPoints >= 5) {
                this._totalPoint += 2
            } else if (addedPoints == 4 || addedPoints == 3 && levelCorrectPoints < 2) {
                this._totalPoint += 1
            } else if (addedPoints == 2 || addedPoints == 1) {
                this._totalPoint += 0
            } else {
                this._totalPoint += 0
            }
        } else if (levelCorrectPoints == 2) {
            if (addedPoints >= 5) {
                this._totalPoint += 1
            } else if (addedPoints == 4 || addedPoints == 3) {
                this._totalPoint += 0
            } else if (addedPoints == 2 || addedPoints == 1) {
                this._totalPoint += 0
            } else {
                this._totalPoint += 0
            }
        }
        return this._totalPoint

    }

    toString() {
        return "Name: " + this._name + ", ID: " + this._id + ", Points: " + this._totalPoint
    }
}


export default GamePlayer