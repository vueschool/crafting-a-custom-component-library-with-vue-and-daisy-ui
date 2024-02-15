<script setup lang="ts">
import { DaisyRating } from 'daisy-vue'
</script>

# Rating Component

## Default is 0 out of 5 Stars

<DaisyRating/>

```vue
<DaisyRating />
```

## Set Number of Stars

<DaisyRating :outOf="10"/>

```vue
<DaisyRating :outOf="10" />
```

## Set Rating

<DaisyRating :rating="3" />

```vue
<DaisyRating :rating="3" />
```

## Set Custom Color

<DaisyRating bgClass="bg-orange-400" />

```vue
<DaisyRating bgClass="bg-orange-400" />
```

## Set Custom Shape

<DaisyRating bgClass="bg-red-500" shape="heart" />

```vue
<DaisyRating bgClass="bg-red-500" shape="heart" />
```
