export default function shouHealth(character) {
    if (character.health < 15) {
        return 'critical';
    } else if (character.health >= 15 && character.health < 50) {
        return'wounded';
    } else {
        return 'healthy';
    }
}
