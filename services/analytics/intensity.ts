export function calculateDebateIntensity(
  votes: number,
  argumentsCount: number
) {

  const voteWeight = 0.7
  const argumentWeight = 0.3

  return (votes * voteWeight) + (argumentsCount * argumentWeight)

}