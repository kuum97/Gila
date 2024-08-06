import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SELECT_TAGS, SelectTag } from '@/constants/tag';
import { ActivityCreateFormProps } from '@/app/(protected)/(user)/dashboard/my-activity/_components/activity-create-form';
import Select, { MultiValue } from 'react-select';
import MultiUploader from '@/components/multi-file-upload';

interface Props extends ActivityCreateFormProps {
  className?: string;
}

export default function DetailInfoSection({ form, className }: Props) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>3. 세부사항</CardTitle>
      </CardHeader>
      <CardContent>
        <Card className="shadow-[inset_0_0_5px_rgb(0,0,0,0.08)] p-2 flex flex-col gap-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg" htmlFor="title">
                  제목
                </FormLabel>
                <FormControl>
                  <Input id="title" type="text" placeholder="제목을 입력해 주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg" htmlFor="description">
                  설명
                </FormLabel>
                <FormControl>
                  <Textarea id="description" placeholder="설명을 입력해 주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormLabel className="text-lg" htmlFor="tags">
                  태그
                </FormLabel>
                <FormControl>
                  <Select
                    isMulti
                    name="tags"
                    id="tags"
                    closeMenuOnSelect={false}
                    options={SELECT_TAGS}
                    value={SELECT_TAGS.filter((tag) => value?.includes(tag.value))}
                    onChange={(option: MultiValue<SelectTag>) => {
                      if (!option || option.length === 0) {
                        onChange(null);
                        return;
                      }
                      onChange(option.map((tag) => tag.value));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maximumCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg" htmlFor="maximumCount">
                  최대 인원
                </FormLabel>
                <FormControl>
                  <Input
                    id="maximumCount"
                    type="number"
                    min={1}
                    placeholder="최대 인원을 설정해 주세요"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel className="text-lg">이미지</FormLabel>
                <FormControl>
                  <MultiUploader onChange={onChange} value={value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Card>
      </CardContent>
    </Card>
  );
}
