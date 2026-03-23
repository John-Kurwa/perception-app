import { calculatePolarization } from "./polarization"
import { calculateDebateIntensity } from "./intensity"
import { calculateMomentum } from "./momentum"
import { calculateOpinionShift } from "./opinionShift"

export function analyzeTopic(data: any) {

  const polarization = calculatePolarization(
    data.agree,
    data.disagree
  )

  const intensity = calculateDebateIntensity(
    data.votes,
    data.arguments
  )

  const momentum = calculateMomentum(
    data.currentVotes,
    data.previousVotes
  )

  const opinionShift = calculateOpinionShift(
    data.previousAgree,
    data.currentAgree
  )

  return {
    polarization,
    intensity,
    momentum,
    opinionShift
  }

}