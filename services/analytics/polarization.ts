export function calculatePolarization(
  agree: number,
  disagree: number
) {

  const total = agree + disagree

  if (total === 0) return 0

  const difference = Math.abs(agree - disagree)

  return 1 - difference / total

}