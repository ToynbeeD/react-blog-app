import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { add, increment, decrement } = useCounterActions();

  const handleInc = () => {
    increment();
  };

  const handleDec = () => {
    decrement();
  };

  const handleAdd = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>

      <Button data-testid="increment-btn" onClick={handleInc}>
        +
      </Button>

      <Button data-testid="decrement-btn" onClick={handleDec}>
        -
      </Button>

      <Button onClick={handleAdd}>
        +5
      </Button>
    </div>
  );
};
