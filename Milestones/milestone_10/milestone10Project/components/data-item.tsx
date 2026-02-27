import { ListItem, Badge } from '@rneui/themed';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Habit } from '@/datatypes';

interface Props {
  habit: Habit;
}

export const DataItem: React.FC<Props> = ({ habit }) => {
  return (
    <ListItem bottomDivider>
      <MaterialIcons name="timer" color="#A64C14" size={24} />
      <ListItem.Content>
        <ListItem.Title
          style={{
            fontWeight: 'bold',
            fontSize: 13,
          }}
        >
          {habit.habitName}
        </ListItem.Title>

        <ListItem.Subtitle
          style={{
            fontSize: 12,
          }}
        >
          User: {habit.name}
        </ListItem.Subtitle>
      </ListItem.Content>

      <Badge value={habit.habitDuration} status="primary" />
    </ListItem>
  );
};
